import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { Link } from "react-router";
import { blogPosts, formatBlogDate } from "../data/blogPosts";

const newsItems = blogPosts.slice(0, 3);

export default function LatestNews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-stone-200 pb-5">
          <div>
            <p className="font-pop text-[10px] uppercase tracking-[0.32em] text-primary">
              The Journal
            </p>
            <h2 className="font-pop pt-2 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-[32px]">
              Latest News
            </h2>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 pb-1 font-pop text-[10px] uppercase tracking-[0.22em] text-stone-900 transition-colors duration-200 hover:text-primary"
          >
            View All
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 pt-10 max-[900px]:mx-auto max-[900px]:max-w-[460px] max-[900px]:grid-cols-1 md:grid-cols-3">
          {newsItems.map((item) => {
            const { label } = formatBlogDate(item.date);

            return (
              <article key={item.id} className="group flex flex-col">
                <Link to={`/blog/${item.slug}`} className="block overflow-hidden bg-stone-100" aria-label={item.title}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </Link>

                <div className="flex items-center gap-3 pt-4 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-400">
                  <span className="text-primary">{item.category}</span>
                  <span className="h-px w-5 bg-stone-200" aria-hidden="true" />
                  <span>{label}</span>
                </div>

                <h3 className="font-pop pt-2.5 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-stone-900">
                  <Link to={`/blog/${item.slug}`} className="transition-colors duration-200 hover:text-primary">
                    {item.title}
                  </Link>
                </h3>

                <p className="flex-1 pt-2 font-pop text-[13px] leading-relaxed text-stone-500 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-stone-200/70 pt-3.5">
                  <span className="font-pop text-[10px] uppercase tracking-[0.18em] text-stone-400">
                    By {item.author}
                  </span>
                  <Link
                    to={`/blog/${item.slug}`}
                    className="inline-flex items-center gap-1.5 font-pop text-[10px] uppercase tracking-[0.2em] text-stone-900 transition-colors duration-200 hover:text-primary"
                  >
                    Read Story
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
