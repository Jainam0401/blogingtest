"use client";

 
type BlogCardProps = {
  title: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  author?: string;
  date?: string;
  avatar?: string;
};

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
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
      {image && (
        <div className="relative h-48 w-full md:h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        </div>
      )}

      <div className="flex flex-col justify-between flex-grow px-6 py-5">
        <div>
          <h4 className="text-lg font-semibold leading-snug line-clamp-2">
            {title}
          </h4>

          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-xs bg-[#F0EEEB] px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-3 text-sm  line-clamp-3">
            {excerpt.length > 100 ? excerpt.substring(0, 100) + "..." : excerpt}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={avatar} alt={author}
              width={32}
              height={32} className="rounded-full object-cover" />
            
            <span className="text-sm font-medium text-gray-900">{author}</span>
          </div>
          {date && <span className="text-xs ">{date}</span>}
        </div>
      </div>

      <div className="h-[4px] w-full bg-blue-400 mt-auto" />
    </article>
  );
}
