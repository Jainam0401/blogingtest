'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'LinkedIn', icon: Linkedin }
]

const footerLinks = [
  {
    title: 'Product feature',
    id: 'product-feature',
    links: [
      'GST Filing & Compliance',
      'Client Communication & Practice Management',
      'Data Automation'
    ]
  },
  {
    title: 'Company',
    id: 'company',
    links: ['Home', 'About', 'Careers', 'Contact']
  },
  {
    title: 'Resources',
    id: 'resources',
    links: ['Blogs', 'Webinars', 'Calculator', 'Case Studies']
  },
  {
    title: '',
    id: 'more',
    links: ['Pricing', 'Use cases', 'Customers']
  }
]

export function SuvitFooter({ className }: Props) {
  return (
    <footer
      className={cn(
        'w-full px-6 md:px-16 border-t border-border bg-background ',
        className
      )}
      aria-labelledby="footer-heading"
    >
      <div className=" mx-auto">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-border gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="SUVIT logo"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-3">
              <span className="font-semibold mb-1 tracking-tight text-2xl">SUVIT</span>
              <span className="text-sm">Powering CA&#39;s Office</span>

            </div>
          </div>

          {/* Social Media Links */}
          <nav aria-label="Social media" className="flex gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="hover:opacity-80 transition-opacity"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10 py-10">
          {/* Left Hero Section */}
          <section className="lg:w-5/12">
            <h2
              id="footer-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-pretty"
            >
              Welcome to the world’s
              <br />
              largest
              <br />
              CA Platform
            </h2>
            <div className="mt-6">
              <Link
                href="#"
                className="group inline-flex h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-white btn-gradient shadow-md"
              >
                Request Callback
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </section>

          {/* Footer Links Section */}
        <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">

            {footerLinks.map(({ title, id, links }) => (
              <nav
                key={id}
                aria-labelledby={`col-${id}`}
                className="space-y-3"
              >
                {title && (
                  <h3 id={`col-${id}`} className="text-sm font-medium">
                    {title}
                  </h3>
                )}
                <ul className="space-y-3 text-sm">
                  {links.map((text) => (
                    <li key={text}>
                      <Link href="#" className="hover:underline">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SuvitFooter
