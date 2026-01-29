import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import FadeIn from "@/components/FadeIn";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/components/CategoryGrid";
import Testimonials from "@/components/Testimonials";
import FeaturedHorizontal from "@/components/FeaturedHorizontal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-background">
      <Hero />
      
      <Marquee />
      
      <FeaturedHorizontal />

      <CategoryGrid />

      <section className="bg-neutral-900 text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-30 fixed-bg-effect" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-transparent to-neutral-900/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-8">The Essence of Style</h2>
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-light max-w-2xl mx-auto font-serif italic">
              "We believe that fashion is more than just clothing—it's a form of self-expression. 
              Quality over quantity, always."
            </p>
            <div className="pt-12">
              <Link href="/about" className="inline-block border border-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                Read Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Testimonials />

      <FadeIn>
        <Newsletter />
      </FadeIn>
    </div>
  );
}
