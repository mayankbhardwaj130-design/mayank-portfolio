"""Regression test for Mayank Bhardwaj marketing site backend APIs."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fall back to reading frontend/.env
    from pathlib import Path
    envp = Path("/app/frontend/.env")
    for line in envp.read_text().splitlines():
        if line.startswith("REACT_APP_BACKEND_URL="):
            BASE_URL = line.split("=", 1)[1].strip()
            break

BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


def test_root():
    r = requests.get(f"{API}/", timeout=30)
    assert r.status_code == 200
    assert r.json().get("message") == "Mayank Bhardwaj API"


def test_blog_list():
    r = requests.get(f"{API}/blog", timeout=30)
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) >= 3
    slugs = {p["slug"] for p in data}
    assert "aeo-geo-ai-search-optimization-guide" in slugs


def test_blog_detail_valid():
    r = requests.get(f"{API}/blog/aeo-geo-ai-search-optimization-guide", timeout=30)
    assert r.status_code == 200
    data = r.json()
    assert data["slug"] == "aeo-geo-ai-search-optimization-guide"
    assert "content" in data and len(data["content"]) > 50


def test_blog_detail_invalid():
    r = requests.get(f"{API}/blog/does-not-exist-xyz", timeout=30)
    assert r.status_code == 404


def test_contact_post_and_persist():
    payload = {
        "name": "TEST_Regression",
        "email": "TEST_regression@example.com",
        "message": "Regression check after REACT_APP_BACKEND_URL default change.",
        "company": "TEST Co",
        "service": "SEO",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=60)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert "id" in data and data["id"]
    assert "created_at" in data

    # verify persistence via GET /api/contact
    time.sleep(0.5)
    r2 = requests.get(f"{API}/contact", timeout=30)
    assert r2.status_code == 200
    ids = {c["id"] for c in r2.json()}
    assert data["id"] in ids


def test_contact_post_validation():
    # missing required
    r = requests.post(f"{API}/contact", json={"name": "X"}, timeout=30)
    assert r.status_code in (400, 422)
    # bad email
    r2 = requests.post(f"{API}/contact", json={"name": "X", "email": "not-an-email", "message": "hi"}, timeout=30)
    assert r2.status_code in (400, 422)
