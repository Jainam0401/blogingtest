import Image from "next/image";
import Tags from "./ui/tags";

export function FeaturedArticle() {
  return (
    <section className="py-10 max-w-6xl mx-auto">
      <div className="relative rounded-3xl bg-card border-l-6 border-sky-400  card-shadow overflow-hidden">
        <div className="flex  flex-col md:flex-row">
          {/* Text Content */}
          <div className="p-8 md:p-12 md:w-7/12">
            <h3 className="text-3xl font-semibold leading-tight">
              Lorem ipsum dolor sit amet consectetur. Lacinia scelerisque massa ultrices nec.
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <Tags />
            </div>

            <p className="mt-4 ">
              The earliest evidence of this interest stems from the Ebers Papyrus, an Egyptian medical papyrus dating c.
              1550 BC, which cited clinical depression. Afflictions of the mind were initially considered the result of
              demonic possessions or the work of evil spirits.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={"/hero.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium">Rohit Kadam</span>
              </div>
              <span className="text-sm ">13th Jan 2020</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative md:w-5/12 min-h-[280px] md:min-h-[420px] overflow-hidden">
            <Image
              src={"/hero.png"}
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
  );
}

export default FeaturedArticle;
