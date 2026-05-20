import pytest
from django.test import Client


@pytest.mark.django_db
def test_homepage():
    client = Client()
    response = client.get("/api/")
    assert response.status_code == 200
