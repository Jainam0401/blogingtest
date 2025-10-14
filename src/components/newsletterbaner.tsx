"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

type NewsletterBannerProps = {
  title?: string
  description?: string
  onSubscribe?: (email: string) => void
  className?: string
}

export function NewsletterBanner({
  title = "Stay Up-to-date!",
  description = "The industry insights you need delivered to your inbox monthly.",
  
  className,
}: NewsletterBannerProps) {


  return (
    <section
      aria-label="Newsletter subscription"
      className={cn(
        "  overflow-hidden mx-auto shadow-lg",
        "bg-gradient-to-r from-[#7393F2]  to-[#BFEDFF]",
        // Background gradient using design tokens
      className,
      )}
    >
    
      <div className="mx-auto    py-10 md:py-12">
        <div className="flex flex-col  px-16 items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl  tracking-normal">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[color:var(--color-primary-foreground)] md:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-pretty text-sm text-[color:var(--color-primary-foreground)]/85 md:text-base">
              {description}
            </p>
          </div>
<div className="">

       <form
        className="mx-auto  flex items-center gap-3 rounded-lg bg-white p-2 shadow-md"
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
</div>

        </div>
      </div>
    </section>
  )
}

export default NewsletterBanner
