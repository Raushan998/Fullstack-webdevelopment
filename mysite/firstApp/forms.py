from django import forms
from firstApp.models import User

class NewUserForm(forms.ModelForm):
    class Meta():
        model=User
        fields='__all__'
