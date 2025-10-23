"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Navbar() {
  const menuItems = [
    {
      title: "Solutions",
      items: [
        {
          title: "Automated Data Entry",
          desc: "Speed up bookkeeping with smart automation",
        },
        {
          title: "GST Reconciliation",
          desc: "Seamless GST matching & reporting",
        },
        {
          title: "Bank Statement Import",
          desc: "Direct bank data integration",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Blog", desc: "Tips, updates & industry news" },
        { title: "Case Studies", desc: "How firms improved with Suvit" },
        { title: "Webinars", desc: "Live sessions with industry experts" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Suvit Logo" width={32} height={32} />
          <span className="text-2xl font-semibold tracking-tight">SUVIT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Primary Navigation"
        >
          <NavigationMenu>
            <NavigationMenuItem className="flex list-none items-center gap-4">
              {menuItems.map(({ title, items }) => (
                <NavigationMenuItem key={title}>
                  <NavigationMenuTrigger className="px-3 py-2   text-sm font-medium rounded-md hover:bg-accent ">
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute  bg-white shadow-lg rounded-md border p-3">
                    <ul className="grid list-none w-[360px] sm:grid-cols-2 gap-2">
                      {items.map(({ title, desc }, i) => (
                        <li key={i}>
                          <Link
                            href="#"
                            className="block rounded-md p-2 hover:bg-accent transition"
                          >
                            <div className="font-medium">{title}</div>
                            <p className="text-sm ">{desc}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              {/* About Us */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="px-3 py-2 text-sm font-medium hover:bg-accent rounded-md"
                >
                  About Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuItem>
          </NavigationMenu>
        </nav>

        {/* Right-side Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md border border-brand px-4 text-sm font-medium text-brand hover:bg-brand/5 transition"
          >
            Sign Up
          </Link>
          <Link
            href="#"
            className="group inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-white btn-gradient shadow-md"
          >
            Request Callback
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden bg-white/50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Suvit Logo"
                    width={20}
                    height={20}
                  />
                  <span className="text-1xl font-semibold tracking-tight">
                    SUVIT
                  </span>
                </Link>
              </SheetHeader>
              <div className="px-4 flex flex-col gap-4">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-2"
                >
                  {menuItems.map(({ title, items }) => (
                    <AccordionItem key={title} value={title}>
                      <AccordionTrigger className="font-semibold mb-2 text-left">
                        {title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-1">
                          {items.map(({ title }, i) => (
                            <Link
                              key={i}
                              href="#"
                              className="block px-2 py-1 text-sm hover:bg-accent rounded-md"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/signup"
                    className="w-full border border-brand text-brand rounded-md px-3 py-2 text-center text-sm"
                  >
                    Sign Up
                  </Link>

                  <Link
                    href="#"
                    className="group inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-white btn-gradient shadow-md"
                  >
                    Request Callback
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
