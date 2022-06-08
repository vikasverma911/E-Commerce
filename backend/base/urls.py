from django.urls import path, include

from .views import GetUsers, addOrderItems, createProductReview, getOrderById, getUserProfile, MyTokenObtainPairView, ProductViewSet, registerUser, updateOrderToPaid, updateUserProfile
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='user')

urlpatterns = [
    path('users/', GetUsers.as_view(), name="users"),
    path('products/<str:pk>/reviews/', createProductReview, name="create-review"),

    path('users/register/', registerUser, name="register"),

    path('users/profile/', getUserProfile, name="users-profile"),
    path('users/profile/update/', updateUserProfile, name="users-profile-update"),

    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('orders/add/', addOrderItems, name="orders-add"),
    path('orders/<str:pk>/', getOrderById, name="user-order"),
    path('orders/<str:pk>/pay/', updateOrderToPaid, name="pay"),


]
urlpatterns += router.urls
