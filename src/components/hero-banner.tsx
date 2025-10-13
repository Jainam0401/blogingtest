export function HeroBanner() {
  return (
    <section className="py-6">
      <div className="rounded-[24px] bg-brand-gradient p-6 md:p-10 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-pretty text-3xl font-semibold leading-tight text-white md:text-5xl">
              Enjoy the Benefits of Suvit&apos;s Smart Automation Firsthand
            </h1>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                Explore Insights <span aria-hidden>›</span>
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            {/* Central badge */}
            <div className="mx-auto h-32 w-32 rounded-2xl bg-white/95 shadow-xl flex items-center justify-center">
              <span className="h-10 w-10 rounded-md bg-brand-gradient block shadow" aria-hidden />
            </div>

            {/* Floating badges */}
            <Badge text="GST automation" className="right-10 top-2" />
            <Badge text="Client Communication" className="right-0 top-10" />
            <Badge text="Data-entry Automation" className="left-1/2 bottom-3 -translate-x-1/2" />
            <Badge text="Chanakya AI" className="right-4 bottom-6" />
            {/* WhatsApp badge (green square) */}
            <div className="absolute -right-1 bottom-2 hidden h-10 w-10 items-center justify-center rounded-md bg-[#25D366] shadow-md md:flex">
              <span className="sr-only">WhatsApp</span>
            </div>

            {/* Soft circular accent */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Badge({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  return (
    <div
      className={`absolute inline-flex items-center rounded-md border bg-white px-3 py-2 text-xs font-medium text-foreground shadow-sm ${className}`}
    >
      {text}
    </div>
  )
}

export default HeroBanner
