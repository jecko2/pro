from http import client
from logging import exception
from multiprocessing import context
from pyexpat.errors import messages
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
    
    
def get_model_detail():
    model = CalculatePrice.objects.latest()
    print(model.price)


get_model_detail()
# authorize razorpay client
razorpay_client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))


def index_and_price(request):
    if request.method == 'GET':
        form = CalculatePriceForm()
        context = {'form': form}
        return render(request, 'pages/index.html', context)
    if request.method == 'POST':
        form = CalculatePriceForm(request.POST)
        context = {'form': form}
        if form.is_valid():
            form_set = form.save(commit=False)
            form_set.client = request.user
            form_set.price = form.cleaned_data['pages']
            form_set.save()
            
            form.save()
            return redirect('main:order_detail')
    return render(request, 'pages/index.html', context)


@login_required
def task_detail(request):
    # task = CalculatePrice.objects.filter(client=request.user).latest()
    # currency = "INR"
    # amount = 5000000
    # razorpay_order = razorpay_client.order.create(dict(amount=amount, currency=currency, payment_capture='0'))
    # razorpay_order_id = razorpay_order['id']
    # callback_url = 'make_payment/'
    
    # pass this info to the frontend
    
    # context = {}
    # context['razorpay_order_id'] = razorpay_order_id
    # context['razorpay_merchant_id'] = settings.RAZOR_KEY_ID
    # context['amount'] = amount
    # context['currency'] = currency
    # context['callback_url'] = callback_url
    
    # if request.method == 'POST':
    #     form = AssignmentForm(request.POST, request.FILES)
    #     if form.is_valid():
    #         form_order = form.save(commit=False)
    #         # form_order.order = task
    #         # form_order.save()
    #         form.save()
    #         return redirect('main:paymenthandler')
    #     else:
    #         messages.error(request, f'Errors {form.errors}')
    # form = AssignmentForm()
    return render(request, 'pages/order_1.html', {'context':context})

@csrf_exempt
def make_payment(request):
 
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
 
            # verify the payment signature.
            result = razorpay_client.utility.verify_payment_signature(
                params_dict)
            if result is None:
                amount = 20000  # Rs. 200
                try:
 
                    # capture the payemt
                    razorpay_client.payment.capture(payment_id, amount)
 
                    # render success page on successful caputre of payment
                    return render(request, 'paymentsuccess.html')
                except:
 
                    # if there is an error while capturing payment.
                    return render(request, 'paymentfail.html')
            else:
 
                # if signature verification fails.
                return render(request, 'paymentfail.html')
        except:
 
            # if we don't find the required parameters in POST data
            return HttpResponseBadRequest()
    else:
       # if other than POST request is made.
        return HttpResponseBadRequest()
@csrf_exempt
def paymentHandler(request):
    if request.method == 'POST':
        try:
            payment_id = request.POST.get('razorpay_payment_id', '')
            razorpay_order_id = request.POST.get('razorpay_order_id', '')
            signature = request.POST.get('razorpay_signature', '')
            params_dict = {
                'razorpay_order_id':razorpay_order_id,
                'razorpay_payment_id':payment_id,
                'razorpay_signature':signature
            }
            # verify
            result = razorpay_client.utility.verify_payment_signature(params_dict)
            if result is None:
                # task = CalculatePrice.objects.filter(client=request.user).latest()
                amount = "400"
                try:
                    razorpay_client.payment.capture(payment_id, amount)
                    return HttpResponse('Successfull')
                except:
                    return HttpResponse('payment failed')
            return HttpResponse('payment failed')
        except:
            return HttpResponseBadRequest()
    return HttpResponseBadRequest()
            
    
@csrf_exempt
def make_payment(request):
 
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
 
            # verify the payment signature.
            result = client.utility.verify_payment_signature(params_dict)
            if result is None:
                amount = 20000  # Rs. 200
                try:
                    # capture the payemt
                    client.payment.capture(payment_id, amount)
 
                    # render success page on successful caputre of payment
                    return HttpResponse('Successfull')
                    # return render(request, 'paymentsuccess.html')
                except:
 
                    # if there is an error while capturing payment.
                    return HttpResponse('Failed')
                    # return render(request, 'paymentfail.html')
            else:
 
                # if signature verification fails.
                return HttpResponse('Failed')
        except:
 
            # if we don't find the required parameters in POST data
            return HttpResponseBadRequest()
    else:
       # if other than POST request is made.
        return HttpResponseBadRequest()
    
    
@csrf_exempt
def paymentHandler(request):
    if request.method == 'POST':
        try:
            payment_id = request.POST.get('razorpay_payment_id', '')
            razorpay_order_id = request.POST.get('razorpay_order_id', '')
            signature = request.POST.get('razorpay_signature', '')
            params_dict = {
                'razorpay_order_id':razorpay_order_id,
                'razorpay_payment_id':payment_id,
                'razorpay_signature':signature
            }
            # verify
            result = client.utility.verify_payment_signature(params_dict)
            if result is None:
                # task = CalculatePrice.objects.filter(client=request.user).latest()
                amount = "400"
                try:
                    client.payment.capture(payment_id, amount)
                    return HttpResponse('Successfull')
                except:
                    return HttpResponse('payment failed')
            return HttpResponse('payment failed')
        except:
            return HttpResponseBadRequest()
    return HttpResponseBadRequest()
            
    order = CalculatePrice.objects.filter(client=request.user).latest()
    amount = "300000"
    razorpay_order = client.order.create(
            {"amount": int(amount) * 100, "currency":"INR", "payment_capture": "1"}
        )
    return render(
            request,
            "pages/order_1.html",
            {
                "callback_url": "make_payment/",
                "razorpay_key": settings.RAZOR_KEY_ID,
                "provider_order_id":razorpay_order["id"],
                "amount":amount,
                
            },
        )