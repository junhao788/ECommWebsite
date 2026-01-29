"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-20 text-center uppercase tracking-tighter">Shop by Category</h2>
        
        <div className="flex flex-col gap-24 md:gap-40">
          {categories.map((category, index) => (
            <div 
              key={category.slug}
              className={`flex flex-col md:flex-row gap-8 md:gap-20 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 aspect-[4/5] relative group overflow-hidden">
                <Link href={`/collection?category=${category.slug}`} className="block w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </Link>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 text-center md:text-left space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground block">
                  0{index + 1} — Collection
                </span>
                <h3 className="text-5xl md:text-7xl font-serif font-bold leading-[0.9]">
                  {category.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
                  Discover our latest {category.name.toLowerCase()} collection. 
                  Designed for the modern individual who values both style and sustainability.
                </p>
                <div className="pt-4">
                  <Link 
                    href={`/collection?category=${category.slug}`}
                    className="inline-block border-b border-black dark:border-white pb-1 text-sm font-bold uppercase tracking-[0.2em] hover:text-primary/70 transition-colors"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
