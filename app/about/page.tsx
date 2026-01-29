import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop"
          alt="Fashion Studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6">Our Story</h1>
          <p className="text-lg font-light uppercase tracking-widest max-w-xl mx-auto text-white/90">
            Crafting the future of fashion since 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24 space-y-24">
        <FadeIn>
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold uppercase tracking-widest">Philosophy</h2>
            <p className="text-xl leading-relaxed text-muted-foreground font-light">
              We believe in the power of simplicity. In a world of noise, we choose silence. 
              In a world of excess, we choose restraint. Every piece we create is a testament 
              to the beauty of essentialism—stripping away the unnecessary to reveal the 
              fundamental elegance of form and function.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold uppercase tracking-wider">Sustainable Craft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to the planet is as strong as our commitment to style. 
                We use 100% organic materials and partner with ethical factories that 
                pay fair wages. Fashion shouldn't cost the earth, and with LUXE, it doesn't have to.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="uppercase text-xs tracking-[0.2em]">Ethically Sourced</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="uppercase text-xs tracking-[0.2em]">Zero Waste Production</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="uppercase text-xs tracking-[0.2em]">Carbon Neutral Shipping</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
