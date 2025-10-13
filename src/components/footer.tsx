import Image from "next/image";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-hero-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="font-semibold">SUVIT</span>
              <span className="text-muted-foreground">Powering CA&apos;s Office</span>
            </div>
            <h3 className="mt-4 text-pretty text-3xl font-semibold md:text-5xl">
              Welcome to the world’s largest CA Platform
            </h3>
            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white btn-gradient shadow-md"
              >
                Request Callback <span aria-hidden>›</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-8 md:flex-row md:justify-end">
            <FooterColumn
              title="Product feature"
              links={["GST Filing & Compliance", "Client Communication & Practice Management", "Data Automation"]}
            />
            <FooterColumn title="Company" links={["Home", "About", "Carrers", "Contact"]} />
            <FooterColumn title="Resources" links={["Blogs", "Webinars", "Calculator", "Case Studies"]} />
            <FooterColumn title=" " links={["Pricing", "Use cases", "Customers"]} />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          {/* social placeholders */}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow">ig</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow">fb</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow">in</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      {title.trim() && <h4 className="text-lg font-semibold">{title}</h4>}
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <Link href="#" className="hover:text-foreground transition">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
