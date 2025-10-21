"use client"

import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { Newsletter } from "@/components/newsletter"
import { FeaturedArticle } from "@/components/featured-article"
import { BlogGrid } from "@/components/blog-grid"
import { SuvitFooter } from "@/components/footer"
import NewsletterBanner from "@/components/newsletterbaner"
import { useEffect, useState } from "react"
import { BlogCard } from "@/components/blog-card"
import { getFinanceNews } from "./actions/getnews"


export default function Page() {
  const [blogs, setBlogs] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getFinanceNews()
      setBlogs(data)
    })()
  }, [])

  return (
    <main className="min-h-dvh">
      <Navbar />

      <section>
        <div className="mx-auto w-full">
          <Newsletter />
        </div>
      </section>

      <section className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-sky-200 rounded-b-full z-0" />
        <div className="relative z-10 mx-auto w-full px-4 md:px-6">
          <FeaturedArticle />
          
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <BlogGrid blogs={blogs.slice(3, 6)} />
      </section>

      <section className="py-14">
        <NewsletterBanner />
      </section>

      <section className="mx-auto w-full max-w-8xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
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
  )
}
