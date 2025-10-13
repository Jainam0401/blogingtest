import { BlogCard } from "./blog-card"

export function BlogGrid() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <BlogCard
          title="How Automation is Transforming CA Offices"
          excerpt="Join us for a full day of events sharing best practices from"
        />
        <BlogCard
          title="How Automation is Transforming CA Offices"
          excerpt="Join us for a full day of events sharing best practices from"
        />
        <BlogCard
          title="How Automation is Transforming CA Offices"
          excerpt="Join us for a full day of events sharing best practices from"
        />
      </div>
    </section>
  )
}

export default BlogGrid
