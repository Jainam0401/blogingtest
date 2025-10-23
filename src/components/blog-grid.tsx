"use client"

import { Key } from "react"
import { BlogCard } from "./blog-card"


export function BlogGrid({ blogs }: any) {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.map((blog: { id: Key | null | undefined; title: string; content: string; image: string | undefined; tags: string[] | undefined; users: { name: string | undefined; pfp: string | undefined }; createdAt: string | number | Date }) => (
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
