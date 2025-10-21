import Image from "next/image";
import Tags from "./ui/tags";

export function FeaturedArticle() {
  return (
    <section className="py-5 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-card border-l-6 border-sky-400 card-shadow overflow-hidden">
        <div className="flex space-y-3 flex-col md:flex-row">
          {/* Text Content Section */}
          <div className="p-8 md:p-12 md:w-7/12">
            <h3 className="text-3xl font-semibold leading-tight">
              Expert Financial Guidance for Businesses & Individuals
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <Tags
                tags={["Tax Consulting", "Auditing", "Business Advisory"]}
              />
            </div>

            <p className="mt-4">
              At SUVIT, we provide comprehensive solutions in taxation,
              auditing, and financial planning. Our goal is to help clients stay
              compliant, reduce tax liabilities, and make informed business
              decisions. From startups to established enterprises, our expertise
              ensures your finances are always in safe hands.
            </p>

            <div className="mt-16 flex items-center justify-between">
              <div className="flex  items-center gap-3">
                <Image
                  src="https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc="
                  alt="Rohit"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-gray-200"
                />

                <span className="font-medium">CA Rohit Kadam</span>
              </div>
              <span className="text-sm ">21st Oct 2025</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative md:w-5/12 min-h-[280px] md:min-h-[420px] overflow-hidden">
            <Image
              src={"/hero.png"}
              alt="CA consulting session"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-3xl ring-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;
