"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden border-y border-white/10">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-12 mx-6">
              <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">Free Shipping Worldwide</span>
              <span className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] opacity-60">Sustainable Materials</span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">New Season Out Now</span>
              <span className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] opacity-60">Ethically Crafted</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
