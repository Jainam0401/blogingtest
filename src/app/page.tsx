"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroBanner } from "@/components/hero-banner";
import { Newsletter } from "@/components/newsletter";
import { FeaturedArticle } from "@/components/featured-article";
import { BlogGrid } from "@/components/blog-grid";
import { SuvitFooter } from "@/components/footer";
import NewsletterBanner from "@/components/newsletterbaner";
import { BlogCard } from "@/components/blog-card";
import { getFinanceNews } from "./actions/getnews";
import  Loader  from "@/components/loader"; // ✅ Import your loader here

export default function Page() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(  () => {
    (async () => {
      try {
        const data = await getFinanceNews();
        setBlogs(data);
      } catch (err) {
        console.error("Error loading blogs:", err);
      } finally {
        setTimeout(() => {
          setLoading(false); // ✅ Stop loading once data is fetched or on error
          
        }, 2000);
      }
    })();
  }, []);

  // ✅ Show loader while loading
  if (loading) {
    return (
      <div className="min-h-screen bg-sky-100 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="min-h-dvh">
      <Navbar />

      <section>
        <div className="mx-auto w-full">
          <Newsletter />
        </div>
      </section>

      <section className="relative py-6 w-full">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-sky-200 rounded-b-full z-0" />
        <div className="relative z-10 mx-auto w-full px-4 md:px-6">
          <FeaturedArticle />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <BlogGrid blogs={blogs.slice(3, 6)} />
      </section>

      <section className="py-10">
        <NewsletterBanner />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0,9).map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.content}
              tags={blog.tags}
              avatar={blog.users.pfp}
              author={blog.postedBy}
              date={new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          ))}
        </div>
      </section>

      <div className="mx-auto w-full py-6 px-4 md:px-6">
        <HeroBanner />
      </div>

      <SuvitFooter />
    </main>
  );
}
