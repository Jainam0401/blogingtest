"use client"

import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
<Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <span className="text-2xl font-semibold  ">SUVIT</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className=" font-inter hover:text-foreground transition">
            Modules <span aria-hidden>▾</span>
          </Link>
          <Link href="#" className=" font-inter hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="#" className=" font-inter hover:text-foreground transition">
            About
          </Link>
          <Link href="#" className=" font-inter hover:text-foreground transition">
            Resource <span aria-hidden>▾</span>
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* outlined button */}
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-brand px-4 text-sm font-medium text-brand hover:bg-brand/5 transition"
          >
            Sign up now
          </Link>
          {/* filled gradient button */}
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-white btn-gradient shadow-md"
          >
            Request Callback
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
