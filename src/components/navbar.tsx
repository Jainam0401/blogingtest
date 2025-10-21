"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Suvit Logo" width={32} height={32} />
          <span className="text-3xl mb-1 font-semibold tracking-tight">SUVIT</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary Navigation">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex  gap-4">

              {/* Solutions */}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-2  focus:outline-none">
                  Solutions
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="bg-white shadow-md rounded-md">
                  <ul className="grid w-[320px] gap-2 p-3  mt-36 sm:w-[480px] sm:grid-cols-2">
                    {[
                      { title: "Automated Data Entry", desc: "Speed up bookkeeping with smart automation" },
                      { title: "GST Reconciliation", desc: "Seamless GST matching & reporting" },
                      { title: "Bank Statement Import", desc: "Direct bank data integration", full: true },
                    ].map(({ title, desc, full }, i) => (
                      <li key={i} className={full ? "sm:col-span-2" : ""}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href="#"
                            className="block rounded-md p-3 hover:bg-gray-50 transition"
                          >
                            <div className="">{title}</div>
                            <p className="text-sm text-muted-foreground">{desc}</p>
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Resources */}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-2  focus:outline-none">
                  Resources
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="bg-white shadow-md rounded-md">
                  <ul className="grid w-[320px] gap-2 p-3">
                    {[
                      { title: "Blog", desc: "Tips, updates & industry news" },
                      { title: "Case Studies", desc: "How firms improved with Suvit" },
                      { title: "Webinars", desc: "Live sessions with industry experts" },
                    ].map(({ title, desc }, i) => (
                      <li key={i}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href="#"
                            className="block rounded-md p-3 hover:bg-gray-50 transition"
                          >
                            <div className="">{title}</div>
                            <p className="text-sm text-muted-foreground">{desc}</p>
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* About Us */}
              <NavigationMenu.Item className="mt-2">
                <NavigationMenu.Link asChild>
                  <Link href="/about" className="px-3 py-2  ">
                    About Us
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

            </NavigationMenu.List>
          </NavigationMenu.Root>
        </nav>

        {/* Right-side CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-sm border border-brand px-4 text-sm font-medium text-brand hover:bg-brand/5 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-white btn-gradient shadow-md"
          >
            Request Callback
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
