from core.settings.dev import *


# auth use switched

AUTH_USER_MODEL = 'account.CustomUser'

# Email Sending

EMAIL_BACKEND = 'django.core.mail.backend.console.EmailBackend'

EMAIL_HOST = get_secrets('EMAIL_HOST')
EMAIL_HOST_USER = get_secrets('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = get_secrets('EMAIL_HOST_PASSWORD')
EMAIL_PORT = get_secrets('EMAIL_PORT')
EMAIL_USE_TLS = get_secrets('EMAIL_USE_TLS')


# STATIC FILES SETTINGS

STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


# Authentication

LOGIN_REDIRECT_URL = 'main:home'
LOGOUT_REDIRECT_URL = 'main:home'


# RAZORPAY SETTINGS

RAZOR_KEY_ID = get_secrets('RAZOR_KEY_ID')
RAZOR_KEY_SECRET = get_secrets('RAZOR_KEY_SECRET')