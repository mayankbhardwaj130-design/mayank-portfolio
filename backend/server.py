from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email (Emergent managed Resend)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get('EMERGENT_EMAIL_KEY')
EMAIL_FROM_NAME = os.environ.get('EMAIL_FROM_NAME', 'Mayank Bhardwaj')
OWNER_EMAIL = os.environ.get('OWNER_EMAIL', 'hello@mayankbhardwaj.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------------- Models ----------------
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str
    company: Optional[str] = None
    service: Optional[str] = None


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    company: Optional[str] = None
    service: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: str
    excerpt: str
    content: str
    category: str
    author: str = "Mayank Bhardwaj"
    read_time: str = "5 min read"
    cover_image: str
    published_at: str


# ---------------- Seed Blog ----------------
SEED_POSTS = [
    {
        "slug": "aeo-geo-ai-search-optimization-guide",
        "title": "AEO & GEO: How to Optimize Your Website for AI Search in 2026",
        "excerpt": "Answer Engine Optimization and Generative Engine Optimization are reshaping SEO. Here is how to make your brand the answer AI assistants cite.",
        "category": "AI Search",
        "read_time": "7 min read",
        "cover_image": "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
        "published_at": "2026-01-14",
        "content": "AI search engines like ChatGPT, Google AI Overviews, and Perplexity are changing how customers discover businesses. Instead of a list of blue links, users now get synthesized answers.\n\n## What is AEO?\nAnswer Engine Optimization is the practice of structuring content so AI engines extract and cite it as the definitive answer. This means clear headings, concise definitions, FAQ schema, and authoritative sourcing.\n\n## What is GEO?\nGenerative Engine Optimization focuses on being included in the training and retrieval context of generative models. Strong brand mentions, structured data, and topical authority increase your visibility.\n\n## Practical Steps\n1. Add FAQ and HowTo schema.\n2. Write concise, quotable answer blocks near the top of each page.\n3. Build topical authority with clusters.\n4. Earn brand mentions across trusted sites.\n\nBusinesses that adapt early to AEO/GEO will own the AI answer box for years."
    },
    {
        "slug": "technical-seo-checklist-core-web-vitals",
        "title": "The Technical SEO Checklist That Doubled a Client's Organic Traffic",
        "excerpt": "Core Web Vitals, crawl budget, and structured data. A field-tested checklist that moved the needle for a SaaS client in North America.",
        "category": "Technical SEO",
        "read_time": "6 min read",
        "cover_image": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
        "published_at": "2026-01-06",
        "content": "Technical SEO is the foundation everything else stands on. Here is the exact checklist I used to double organic traffic for a B2B SaaS client.\n\n## 1. Core Web Vitals\nOptimize LCP under 2.5s, INP under 200ms, and CLS under 0.1. Compress images, defer non-critical JS, and use a CDN.\n\n## 2. Crawlability\nAudit your robots.txt, fix orphan pages, and submit a clean XML sitemap.\n\n## 3. Structured Data\nImplement Organization, Article, Product, and FAQ schema to unlock rich results.\n\n## 4. Indexation Hygiene\nRemove thin and duplicate pages, canonicalize properly, and monitor Search Console coverage.\n\nDo these consistently and rankings follow."
    },
    {
        "slug": "google-ads-roas-scaling-framework",
        "title": "A Simple Framework to Scale Google Ads Without Killing ROAS",
        "excerpt": "Scaling paid search is where most budgets get wasted. Here is the structured framework I use to grow spend while protecting return on ad spend.",
        "category": "Google Ads",
        "read_time": "5 min read",
        "cover_image": "https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg",
        "published_at": "2025-12-20",
        "content": "Scaling Google Ads is not about increasing budgets blindly. It is about compounding what works.\n\n## Step 1: Isolate Winners\nSegment campaigns by intent and pause anything below your target ROAS after sufficient data.\n\n## Step 2: Expand Search Terms\nMine the search terms report weekly. Promote converting queries to exact match and add negatives aggressively.\n\n## Step 3: Landing Page Alignment\nMessage-match your ads to landing pages. A 10% lift in conversion rate beats a 10% cut in CPC.\n\n## Step 4: Scale in Increments\nRaise budgets 15-20% every few days so the algorithm re-optimizes without volatility.\n\nProfitable scaling is a discipline, not a gamble."
    },
]


async def seed_blog():
    count = await db.blog_posts.count_documents({})
    if count == 0:
        for p in SEED_POSTS:
            post = BlogPost(**p)
            await db.blog_posts.insert_one(post.model_dump())
        logger.info("Seeded blog posts")


# ---------------- Email helper ----------------
async def send_owner_notification(contact: Contact):
    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY not set; skipping email notification")
        return
    html = f"""
    <table width="100%" style="font-family: Arial, sans-serif; color:#111827;">
      <tr><td>
        <h2 style="color:#2563EB;margin:0 0 12px;">New Contact Enquiry</h2>
        <p style="margin:0 0 8px;"><strong>Name:</strong> {contact.name}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> {contact.email}</p>
        <p style="margin:0 0 8px;"><strong>Company:</strong> {contact.company or '-'}</p>
        <p style="margin:0 0 8px;"><strong>Service:</strong> {contact.service or '-'}</p>
        <p style="margin:0 0 8px;"><strong>Message:</strong></p>
        <p style="background:#F9FAFB;padding:12px;border-radius:8px;">{contact.message}</p>
        <p style="color:#6B7280;font-size:12px;margin-top:16px;">Received {contact.created_at}</p>
      </td></tr>
    </table>
    """
    payload = {
        "to": [OWNER_EMAIL],
        "subject": f"New enquiry from {contact.name}",
        "html": html,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": contact.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            resp = await c.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
    except Exception as e:
        logger.error(f"Email notification failed: {e}")


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "Mayank Bhardwaj API"}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    await db.contacts.insert_one(contact.model_dump())
    await send_owner_notification(contact)
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.get("/blog", response_model=List[BlogPost])
async def list_blog():
    docs = await db.blog_posts.find({}, {"_id": 0}).sort("published_at", -1).to_list(100)
    return docs


@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog(slug: str):
    doc = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Post not found")
    return doc


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await seed_blog()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
