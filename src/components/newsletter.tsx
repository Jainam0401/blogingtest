"use client"

import { useState } from "react"

const TAGS = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]

export function Newsletter() {
  const [active, setActive] = useState("All")

  return (
    <div className=" w-full bg-sky-200 py-12 px-6 md:px-10">
      {/* Heading Section */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-balance text-3xl font-semibold md:text-5xl">
          Stay Updated with Suvit’s Expert Insights
        </h2>
        <p className="mt-3 font-medium text-gray-700">
          Learn about the latest trends in GST, accounting automation, and CA best practices.
        </p>
      </div>

      {/* Newsletter Form */}
      <form
        className="mx-auto mt-8 flex max-w-lg items-center gap-3 rounded-lg bg-white p-2 shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          className="h-11 flex-1 rounded-md px-4 text-sm outline-none"
          placeholder="Email Address"
          aria-label="Email Address"
        />
        <button
          type="submit"
          className="h-11 rounded-md px-5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90"
        >
          Subscribe
        </button>
      </form>

      {/* Tags Section */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold">Filters based on tags</h3>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {TAGS.map((t, index) => (
            <div key={t} className="flex items-center">
              <button
                onClick={() => setActive(t)}
                className={`w-[75px] h-[32px] flex items-center justify-center px-4 py-1 rounded-[3px] 
                     bg-[#F0EEEB] shadow-[0_1px_2px_0_#00000026,0_0_5px_0_#1718180D]
                     text-gray-800 text-sm font-medium 
                            `}
              >
                {t}
              </button>

              {/* Line after "All" */}
              {t === "All" && (
                <div className="mx-2 ml-2 w-[1px] h-6 bg-white opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Newsletter
