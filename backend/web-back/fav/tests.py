from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import Fav


class FavModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Fav.objects.create(title="first fav", body="a body here")

    def test_title_content(self):
        fav = Fav.objects.get(id=1)
        excepted_object_name = f'{fav.title}'
        self.assertEqual(excepted_object_name, 'first fav')

    def test_body_content(self):
        fav = Fav.objects.get(id=1)
        excepted_object_name = f'{fav.body}'
        self.assertEqual(excepted_object_name, 'a body here')