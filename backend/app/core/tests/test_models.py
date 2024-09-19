"""
Test cases for the models.
"""

from django.test import TestCase
from django.contrib.auth import get_user_model


class TestModels(TestCase):
    """
    Test cases for the models.
    """

    def test_create_user_with_email_successfully(self):
        """
        Test creating a new user with email is successful.
        """
        email = "test@example.com"
        password = "testpass"
        User = get_user_model()
        user = User.objects.create_user(
            email=email,
            password=password,
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
