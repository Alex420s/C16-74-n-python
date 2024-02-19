from django.http import HttpResponse

def create_payment(request):
    return HttpResponse("Create payment view")
