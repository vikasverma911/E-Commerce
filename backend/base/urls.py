from django.urls import path, include

from .views import GetUsers, getUserProfile, MyTokenObtainPairView, ProductViewSet, registerUser, updateUserProfile
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='user')

urlpatterns = [
    path('users/', GetUsers.as_view(), name="users"),
    path('users/register/', registerUser, name="register"),

    path('users/profile/', getUserProfile, name="users-profile"),
    path('users/profile/update/', updateUserProfile, name="users-profile-update"),

    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
urlpatterns += router.urls
