from django.http import HttpResponse

def create_appointment(request):
    return HttpResponse("Create appointment view")
