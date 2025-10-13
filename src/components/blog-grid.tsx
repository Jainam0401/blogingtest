"use client"

import { BlogCard } from "./blog-card"
import type { BlogWithUser } from "@/app/page"

type BlogGridProps = {
  blogs: BlogWithUser[]
}

export function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            excerpt={blog.content}
            image={blog.image}
            tags={blog.tags}
            author={blog.users.name}
            date={new Date(blog.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            avatar={blog.users.pfp}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogGrid
