import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API}/blog`).then((r) => setPosts(r.data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <section id="blog" className="py-24 md:py-32" data-testid="blog-preview-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Blog</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
              Insights on SEO, AI Search & growth
            </h2>
          </div>
          <Link to="/blog" data-testid="view-all-blog-link" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group"
              data-testid={`blog-preview-${i}`}
            >
              <Link to={`/blog/${p.slug}`}>
                <div className="rounded-2xl overflow-hidden border border-border mb-4 h-48">
                  <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="text-accent font-semibold uppercase tracking-wider">{p.category}</span>
                  <span>&middot;</span>
                  <span>{p.read_time}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug group-hover:text-primary transition-colors flex items-start gap-1">
                  {p.title}
                  <ArrowUpRight className="h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
