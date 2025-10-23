import Image from "next/image";
import Tags from "./ui/tags";

export function FeaturedArticle() {
  return (
    <section className="py-6 px-1 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-card border-l-6 border-sky-400 card-shadow overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 sm:p-8 md:p-12 md:w-7/12">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Expert Financial Guidance for Businesses & Individuals
            </h3>

            <div className="mt-4  gap-2">
              <Tags
                tags={["Tax Consulting", "Auditing", "Business Advisory"]}
              />
            </div>

            <p className="mt-4 text-sm sm:text-base">
              At SUVIT, we provide comprehensive solutions in taxation,
              auditing, and financial planning. Our goal is to help clients stay
              compliant, reduce tax liabilities, and make informed business
              decisions. From startups to established enterprises, our expertise
              ensures your finances are always in safe hands.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc="
                  alt="Rohit"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-gray-200"
                />
                <span className="font-medium text-sm sm:text-base">CA Rohit Kadam</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600">21st Oct 2025</span>
            </div>
          </div>

          <div className="relative md:w-5/12 w-full min-h-[240px] sm:min-h-[300px] md:min-h-[420px]">
            <Image
              src="https://imgs.search.brave.com/R1U0-_0Svu3-VsqzeJHcBwz_0MfVa5-Hy0xAwFhP8ao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2ZwLm5ldC8tL21l/ZGlhL2ltYWdlcy9j/ZnAtYm9hcmQvaWxs/dXN0cmF0aW9ucy9m/dWxsLXdpZHRoL3Nj/ZW5lLzkyNTQ4OTE3/MC5qcGc_Y3g9MCZj/eT0wJmN3PTc1MCZj/aD01NTAmaGFzaD01/MTRBNTE2RjVEQTM1/QzQ4RUFCMjY0RUZD/QkZGMzQ5Qg"
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
