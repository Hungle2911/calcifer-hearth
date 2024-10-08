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

    def test_new_user_email_normalized(self):
        """Test email is normalized for new users."""
        sample_emails = [
            ["test1@EXAMPLE.com", "test1@example.com"],
            ["Test2@Example.com", "Test2@example.com"],
            ["TEST3@EXAMPLE.com", "TEST3@example.com"],
            ["test4@example.COM", "test4@example.com"],
        ]
        for email, expected in sample_emails:
            user = get_user_model().objects.create_user(email, "sample123")
            self.assertEqual(user.email, expected)

    def test_new_user_without_email_raises_error(self):
        """Test that creating a user without an email raises a ValueError."""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user("", "test123")
