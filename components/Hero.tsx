"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[120vh] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
      </motion.div>

      {/* Floating Elements / Asymmetric Design */}
      <div className="relative z-20 h-screen flex flex-col justify-between p-8 md:p-12">
        <div className="flex justify-between items-start mt-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block"
          >
            <p className="text-white text-xs font-bold uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
              Spring / Summer 2026
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-right text-white"
          >
             <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2">
              The New Collection
            </p>
            <p className="text-4xl md:text-6xl font-serif">01</p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto w-full text-center md:text-left relative">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] leading-[0.8] font-serif font-bold text-white tracking-tighter mix-blend-overlay"
          >
            MODERN
            <br />
            <span className="ml-0 md:ml-32 italic font-light">LUXURY</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-8 md:ml-32"
          >
            <p className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed font-light text-center md:text-left">
              Discover a curated selection of timeless pieces designed for the contemporary individual. 
              Elevate your wardrobe with sustainable elegance.
            </p>
            
            <Link href="/collection" className="group relative px-8 py-3 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white hover:text-black">
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">
                Explore Collection
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="flex justify-center pb-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
