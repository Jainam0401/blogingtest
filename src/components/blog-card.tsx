import Image from "next/image"
import Tags from "./ui/tags"

type BlogCardProps = {
  title: string
  excerpt: string
}

export function BlogCard({ title, excerpt }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
      <div className="relative h-48 w-full md:h-56">
        <Image
          src={"/placeholder.svg?height=320&width=640&query=industry%20spark%20bokeh"}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h4 className="text-xl font-semibold">{title}</h4>

        <div className="mt-3 flex flex-wrap gap-2">
         <Tags />
        </div>

        <p className="mt-3 text-muted-foreground">{excerpt}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/placeholder.svg?height=32&width=32&query=circle%20avatar"}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-medium">Rohit Kadam</span>
          </div>
          <span className="text-sm text-muted-foreground">13th Jan 2020</span>
        </div>
      </div>

      {/* subtle blue underline accent */}
      <div className="h-2 w-full bg-brand/20" />
    </article>
  )
}
