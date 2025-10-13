import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { Newsletter } from "@/components/newsletter"
import { FeaturedArticle } from "@/components/featured-article"
import { BlogGrid } from "@/components/blog-grid"
import { Footer } from "@/components/footer"
import NewsletterBanner from "@/components/newsletterbaner"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Navbar />
     

      <section className=" ">
        <div className="mx-auto w-full   ">
          <Newsletter />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FeaturedArticle />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <BlogGrid />
      </section>
      
      <section className="">
     <NewsletterBanner/>
      </section>
      
            <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <BlogGrid />
      </section>
       <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <HeroBanner />
      </div>

      <Footer />
    </main>
  )
}
