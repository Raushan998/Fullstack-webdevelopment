import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','first_project.settings')
import django
django.setup()

### FAKE POP SCRIPT
import random
from hello.models import AccessRecord,Webpage,Topic
from faker import Faker
fakegen=Faker()
topics=['Search','Social','Marketplace','News','Games']

def add_topic():
    t=Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t
def populate(N=5):

    #get the topic of entry
    for entry in range(N):
        # create the fake data for that entry
        top=add_topic()
        fake_url=fakegen.url()
        fake_date=fakegen.date()
        fake_name=fakegen.company()
        #create the new Webpage entry
        webpg=Webpage.objects.get_or_create(topic=top,url=fake_url,name=fake_name)[0]

        # create a fake access record for that Webpage
        acc_rec=AccessRecord.objects.get_or_create(name=webpg,date=fake_date)[0]

if __name__=='__main__':
    print("Populating script!")
    populate(20)
    print("populating complete!")
