"use client"

import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { Newsletter } from "@/components/newsletter"
import { FeaturedArticle } from "@/components/featured-article"
import { BlogGrid } from "@/components/blog-grid"
import { SuvitFooter } from "@/components/footer"
import NewsletterBanner from "@/components/newsletterbaner"
import { useEffect, useState } from "react"
import { blogswithImages, blogswithoutImages } from "./actions/users"
import { BlogCard } from "@/components/blog-card"

interface Blog {
  id: number
  title: string
  content: string
  image?: string
  tags?: string[]
  postedBy: string
  createdAt: Date | string
  updatedAt?: Date | string
}

export interface BlogWithUser extends Blog {
  users: {
    name: string
    email: string
    pfp: string
  }
}

export default function Page() {
  const [blogs, setBlogs] = useState<BlogWithUser[]>([])
  const [blogsWithImages, setBlogsWithImages] = useState<BlogWithUser[]>([])

  useEffect(() => {
    ;(async () => {
      const blogsWithImagesRes = await blogswithImages()
      setBlogsWithImages(blogsWithImagesRes)
      const blogsWithoutImagesRes = await blogswithoutImages()
      setBlogs(blogsWithoutImagesRes)
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
  {/* Background Layer */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-sky-200 rounded-b-full z-0" />

  {/* Foreground Content */}
  <div className="relative z-10 mx-auto w-full px-4 md:px-6">
    <FeaturedArticle />
  </div>
</section>

<section className="mx-auto w-full max-w-6xl px-4 md:px-6">
       
        <BlogGrid blogs={blogsWithImages} />
      </section>
 
      <section className="py-16  ">
        <NewsletterBanner />
      </section>

    
      <section className="mx-auto  w-full max-w-8xl px-4 md:px-6">
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
