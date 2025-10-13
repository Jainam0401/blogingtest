import Image from "next/image"
import Tags from "./ui/tags"

export function FeaturedArticle() {
  return (
    <section className="py-10">
      <div className="relative rounded-3xl bg-card card-shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-semibold leading-tight">
              Lorem ipsum dolor sit amet consectetur. Lacinia scelerisque massa ultrices nec.
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <Tags />
            </div>

            <p className="mt-4 text-muted-foreground">
              The earliest evidence of this interest stems from the Ebers Papyrus, an Egyptian medical papyrus dating c.
              1550 BC, which cited clinical depression. Afflictions of the mind were initially considered the result of
              demonic possessions or the work of evil spirits.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={"/placeholder.svg?height=40&width=40&query=circle%20avatar"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium">Rohit Kadam</span>
              </div>
              <span className="text-sm text-muted-foreground">13th Jan 2020</span>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px]">
            <Image
              src={"/placeholder.svg?height=600&width=900&query=growth%20chart%20plants"}
              alt="Featured visual"
              fill
              className="object-cover"
              priority
            />
            {/* rounded corners impression */}
            <div className="absolute inset-0 rounded-3xl ring-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticle
