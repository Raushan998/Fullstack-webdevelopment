from django.conf.urls import url
from hello import views
urlpatterns=[
    url(r'^$',views.myView,name='myView'),
]
