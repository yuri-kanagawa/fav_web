from django.urls import path, include
from .views import ListFav, DetailFav

urlpatterns = [
    path('<int:pk>/', DetailFav.as_view()),
    path('', ListFav.as_view())
]