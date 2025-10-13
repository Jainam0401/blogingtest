"use client"

import Image from "next/image"

type BlogCardProps = {
  title: string
  excerpt: string
  image?: string
  tags?: string[]
  author?: string
  date?: string
  avatar?: string
}

export function BlogCard({
  title,
  excerpt,
  image,
  tags = [],
  author = "Unknown Author",
  date = "",
  avatar,
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
      {/* blog image */}
     {image && <div className="relative h-48 w-full md:h-56">
        <Image
          src={"/hero.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>}

      <div className="p-6">
        <h4 className="text-xl font-semibold">{title}</h4>

        {/* tags */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className=" h-[32px] flex items-center justify-center px-4 py-1 rounded-[4px] 
                     bg-[#F0EEEB] shadow-[0_1px_2px_0_#00000026,0_0_5px_0_#1718180D]
                     text-gray-800 text-sm font-medium mix-blend-multiply0"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="mt-3  line-clamp-3">{excerpt}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={avatar || "/avatar-placeholder.png"}
              alt={author}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-medium">{author}</span>
          </div>
          {date && <span className="text-sm ">{date}</span>}
        </div>
      </div>





      {/* subtle blue underline accent */}
      <div className="h-2 w-full mt-10 bg-brand/70" />
    </article>
  )
}
