"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CollectionCard from "@/components/CollectionCard";
import { products } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="h-[300vh] relative bg-neutral-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Adjusted padding to ensure text isn't hidden by navbar if it was present, though navbar now auto-hides */}
        <div className="absolute top-24 md:top-32 left-8 md:left-24 z-10 pointer-events-none mix-blend-difference">
           <h2 className="text-white text-5xl md:text-8xl font-serif font-bold tracking-tighter">
             Featured <br/>
             <span className="italic font-light text-neutral-400">Looks</span>
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-12 pl-8 md:pl-[40vw]">
          {products.slice(0, 6).map((product, index) => (
            <div key={product.id} className="relative w-[85vw] md:w-[450px] h-[65vh] md:h-[75vh] flex-shrink-0 group">
              <div className="w-full h-full relative overflow-hidden bg-neutral-900">
                <CollectionCard product={product} />
              </div>
              <div className="absolute -bottom-16 left-0 text-white opacity-100 transition-opacity duration-300">
                 <span className="text-4xl font-serif italic text-neutral-700">0{index + 1}</span>
              </div>
            </div>
          ))}
          
          <div className="w-[85vw] md:w-[450px] h-[65vh] md:h-[75vh] flex-shrink-0 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors group">
             <Link href="/collection" className="text-center group-hover:scale-110 transition-transform duration-500">
                <span className="block text-white text-3xl font-serif mb-6">View All</span>
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/30 text-white">
                  <ArrowRight className="w-6 h-6" />
                </span>
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
