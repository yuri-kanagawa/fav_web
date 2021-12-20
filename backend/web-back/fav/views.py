# from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from .models import Fav
from .serializers import FavSerializer


class ListFav(generics.ListAPIView):
    queryset = Fav.objects.all()
    serializer_class = FavSerializer


class DetailFav(generics.RetrieveAPIView):
    queryset = Fav.objects.all()
    serializer_class = FavSerializer