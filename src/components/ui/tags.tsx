// components/TagList.tsx
import React from "react"

const tags = ["Tag 1", "Tag 2", "Tag 3"]

export default function Tags() {
  return (
    <div className="flex gap-2 font-inter">
      {tags.map((tag) => (
        <span
          key={tag}
          className="w-[75px] h-[32px] flex items-center justify-center px-4 py-1 rounded-[4px] 
                     bg-[#F0EEEB] shadow-[0_1px_2px_0_#00000026,0_0_5px_0_#1718180D]
                     text-gray-800 text-sm font-medium mix-blend-multiply"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
