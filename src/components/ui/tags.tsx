// components/TagList.tsx
import React from "react"



export default function Tags( { tags }: { tags: string[] } ) {
  return (
    <div className="flex md:flex-row flex-col gap-3 md:gap-2 font-inter">
      {tags.map((tag) => (
        <span
          key={tag}
          className=" h-[32px] flex items-center justify-center px-4 py-1 rounded-[4px] 
                     bg-[#F0EEEB] shadow-[0_1px_2px_0_#00000026,0_0_5px_0_#1718180D]
                     text-gray-800 text-sm font-medium mix-blend-multiply"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
