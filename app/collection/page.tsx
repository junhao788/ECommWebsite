import FadeIn from "@/components/FadeIn";
import CollectionPageClient from "@/components/CollectionPageClient";
import { products } from "@/lib/data";
import Image from "next/image";

export default function CollectionPage() {
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      {/* Hero Header */}
      <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Collection Header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-4">The Collection</h1>
            <p className="text-lg font-light tracking-wide max-w-xl mx-auto text-white/90">
              Timeless pieces designed for the modern wardrobe.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CollectionPageClient products={products} categories={uniqueCategories} />
      </div>
    </div>
  );
}
