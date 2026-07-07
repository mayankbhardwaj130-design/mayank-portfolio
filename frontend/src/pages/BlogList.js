import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${API}/blog`).then((r) => setPosts(r.data)).finally(() => setLoading(false));
  }, []);

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen" data-testid="blog-list-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">The Blog</p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
          Insights on SEO, AI Search & Growth
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-14 text-lg">
          Practical strategies and field-tested frameworks to help your business grow through search.
        </p>

        {loading ? (
          <p className="text-muted-foreground">Loading articles...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group"
                data-testid={`blog-card-${i}`}
              >
                <Link to={`/blog/${p.slug}`}>
                  <div className="rounded-2xl overflow-hidden border border-border mb-4 h-52">
                    <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="text-accent font-semibold uppercase tracking-wider">{p.category}</span>
                    <span>&middot;</span><span>{p.published_at}</span><span>&middot;</span><span>{p.read_time}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold leading-snug group-hover:text-primary transition-colors flex items-start gap-1">
                    {p.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
