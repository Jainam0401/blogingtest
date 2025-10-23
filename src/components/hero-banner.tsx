import Image from "next/image"

export function HeroBanner() {
  return (
    <section className="py-2">
      <div className="rounded-[24px] bg-brand-gradient p-6 md:p-10 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-pretty text-3xl font-semibold leading-tight text-white md:text-5xl">
              Enjoy the Benefits of Suvit&apos;s Smart Automation Firsthand
            </h1>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60  px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                Explore Insights <span aria-hidden>›</span>
              </a>
            </div>
          </div>
<div className="relative md:col-span-5 py-3 flex items-center justify-center">
  {/* Central circular section */}
  <div className="relative h-64 w-64 rounded-full bg-white/30 shadow-xl flex items-center justify-center">
    <span className="h-36 w-36 rounded-full bg-white/70 block shadow" aria-hidden />

   
    <Badge
      text="GST automation"
      className="absolute md:-top-0 -top-1  -left-6 md:-left-6 rounded-none"
    />
    <Badge
      text="Client Communication"
      className="absolute  -top-3 md:-top-0 -right-8 md:-right-14 rounded-none"
    />
    <Badge
      text="Tally"
      className="absolute top-20 -right-4 md:-right-6 italic rounded-none"
    />
    <Badge
      text="Chanakya AI"
      className="absolute bottom-12 -right-8 md:-right-14 rounded-none"
    />
    <Badge
      text="Automation"
      className="absolute bottom-18 tracking-tight -left-8 rounded-none"
    />

    {/* WhatsApp icon centered below */}
    <Image
      src="/whatsapp.png"
      width={60}
      height={60}
      alt="WhatsApp"
      className="absolute -bottom-6 left-1/2 -translate-x-1/2"
    />
  </div>

  {/* Subtle background glow */}
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
      className={`absolute inline-flex items-center rounded-md border bg-white px-2 py-2 text-xs font-medium  shadow-sm ${className}`}
    >
      {text}
    </div>
  )
}

export default HeroBanner
