import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${API}/blog/${slug}`).then((r) => setPost(r.data)).catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <main className="pt-40 pb-32 min-h-screen text-center" data-testid="blog-not-found">
        <h1 className="font-heading text-3xl font-semibold mb-4">Article not found</h1>
        <Link to="/blog"><Button variant="outline" className="rounded-full">Back to Blog</Button></Link>
      </main>
    );
  }

  if (!post) {
    return <main className="pt-40 pb-32 min-h-screen text-center text-muted-foreground">Loading...</main>;
  }

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen" data-testid="blog-detail-page">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8" data-testid="back-to-blog">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="text-accent font-semibold uppercase tracking-wider">{post.category}</span>
          <span>&middot;</span><span>{post.published_at}</span><span>&middot;</span><span>{post.read_time}</span>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">By {post.author}</p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="rounded-2xl overflow-hidden border border-border mb-10 h-64 md:h-96">
            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <article className="prose-content">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="font-heading text-2xl font-semibold mt-10 mb-4">{block.replace("## ", "")}</h2>;
              }
              return <p key={i} className="text-base text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">{block}</p>;
            })}
          </article>
        </motion.div>

        <div className="mt-14 p-8 rounded-2xl bg-secondary/50 border border-border text-center">
          <h3 className="font-heading text-xl font-semibold mb-2">Want results like these for your business?</h3>
          <p className="text-muted-foreground mb-5">Book a free strategy call and let&apos;s talk growth.</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"><Button className="rounded-full bg-primary hover:bg-primary/90" data-testid="blog-cta-btn">Book a Free Strategy Call</Button></a>
        </div>
      </div>
    </main>
  );
}
