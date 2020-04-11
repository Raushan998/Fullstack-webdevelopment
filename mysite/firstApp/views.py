from django.shortcuts import render
from firstApp.models import User
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,'firstApp/help.html')
def users(request):
    user_list=User.objects.order_by('first_name')
    user_dict={'users':user_list}
    return render(request,'firstApp/user.html',context=user_dict)
