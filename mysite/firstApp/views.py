from django.shortcuts import render
#from firstApp.models import User
from django.http import HttpResponse
from firstApp.forms import NewUserForm
# Create your views here.
def index(request):
    return render(request,'firstApp/help.html')
def users(request):

    form=NewUserForm()
    if request.method=="POST":
        form=NewUserForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("Error Form Invalid")
    return render(request,'firstApp/user.html',{'form':form})
