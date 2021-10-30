from rest_framework import serializers
from .models import Fav


class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fav
        fields = ('id', 'title', 'body')