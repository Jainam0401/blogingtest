import Image from "next/image"

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
                className="inline-flex items-center gap-2 rounded-xl border border-white/60  px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                Explore Insights <span aria-hidden>›</span>
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            {/* Central badge */}
            <div className="mx-auto h-64 w-64 rounded-full  bg-white/30 shadow-xl flex items-center justify-center">
              <span className="h-36 w-36 rounded-full bg-white/70 block shadow" aria-hidden />
            </div>

            {/* Floating badges */}
            <Badge text="GST automation" className="left-32 rounded-none top-2" />
            <Badge text="Client Communication" className="rounded-none right-24 top-8" />
            <Badge text="Data-entry Automation" className="rounded-none left-40 bottom-5 -translate-x-1/2" />
            <Badge text="Chanakya AI" className="rounded-none right-36 bottom-12" />
            {/* WhatsApp badge (green square) */}
            
              <Image src={"/whatsapp.png"} width={60} height={60} alt="WhatsApp" className="top-56 left-64 absolute"  />
            

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
      className={`absolute inline-flex items-center rounded-md border bg-white px-3 py-2 text-xs font-medium  shadow-sm ${className}`}
    >
      {text}
    </div>
  )
}

export default HeroBanner
