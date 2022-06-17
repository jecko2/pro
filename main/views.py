from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render, redirect
from django.views import generic
from django.contrib.auth.decorators import login_required
from orders.models import Assignment, CalculatePrice
from orders.forms import CalculatePriceForm, AssignmentForm 
from orders.models import CalculatePrice
import razorpay
from django.contrib import messages
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
    
    
    
# authorize razorpay client

client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))

# GLOBAL FUNCTION: find model details
# def get_model_detail_price(client):
#     model = CalculatePrice.objects.filter(client=request.user).last()
#     return int(model.price)
 

def index_and_price(request):
    if request.method == 'GET':
        form = CalculatePriceForm()
        context = {'form': form}
        return render(request, 'pages/index.html', context)
    if request.method == 'POST':
        form = CalculatePriceForm(request.POST)
        # function to calculate price
        def calculate_price():
            price = 0
            form_paper = form.cleaned_data['paper']
            form_level = form.cleaned_data['level']
            form_pages = form.cleaned_data['pages']
            if form_level == 'HS':
                price = int(form_pages * 2.95)
            if form_level == 'UG':
                price = int(form_pages * 3.25)
            if form_level == 'M':
                price = int(form_pages * 3.45)
            if form_level == 'D':
                price = int(form_pages * 3.65)
            return price
        
        context = {'form': form}
        if form.is_valid():
            form_set = form.save(commit=False)
            form_set.client = request.user
            form_set.price = calculate_price()
            form_set.save()
            form.save()
            return redirect('main:order_detail')
        return render(request, 'pages/index.html', context)


@login_required
def task_detail(request):
    if request.method == "POST":
        form = AssignmentForm(request.POST)
        currency = 'USD'
        if form.is_valid():
            def get_model_detail_price():
                model = CalculatePrice.objects.filter(client=request.user).last()
                return model.price
            amount = get_model_detail_price()
            if form.cleaned_data['service'] == 'AW':
                amount += 0.92
                model = CalculatePrice.objects.filter(client=request.user).last()
                model.price = get_model_detail_price()
                model.save()
                print(form.cleaned_data, "amount:", amount)
            return int(round(amount))
        # razorpay_order = client.order.create(dict(
        #     amount=get_price_on_type_of_service(),currency=currency,payment_capture='1'
        #     ))
        # print(get_price_on_type_of_service(), currency)
        return render(request, "pages/order_1.html",{   'form':form,})
                        # 'razorpay_order_id':razorpay_order['id'],
                        # "razorpay_merchant_key": settings.RAZOR_KEY_ID,
                        # "amount":amount,
                        # "callback_url":'paymenthandler/',
                        # "currency":currency
                    # }
                    # )
    form = AssignmentForm()
    return render(request, "pages/order_1.html", {'form':form})


@csrf_exempt
def paymenthandler(request):
 
    # only accept POST request.
    if request.method == "POST":
        try:
            # get the required parameters from post request.
            payment_id = request.POST.get('razorpay_payment_id', '')
            razorpay_order_id = request.POST.get('razorpay_order_id', '')
            signature = request.POST.get('razorpay_signature', '')
            params_dict = {
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': payment_id,
                'razorpay_signature': signature
            }
 
            result = client.utility.verify_payment_signature(params_dict)
            if result is None:
                # task = CalculatePrice.objects.filter(client=request.user).latest()
                amount = get_model_detail_price()
                try:
                    client.payment.capture(payment_id, amount)
                    return HttpResponse('Successfull')
                except:
                    return HttpResponse('not passed')
            return HttpResponse('payment failed')
        except:
            return HttpResponseBadRequest()
    return HttpResponseBadRequest()



 
