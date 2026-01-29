"use client";

import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <Quote className="w-12 h-12 text-primary/20 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center uppercase">What They Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-8 border border-border/50 text-center hover:border-primary/50 transition-colors duration-300 shadow-sm"
            >
              <p className="text-lg italic text-muted-foreground mb-6 font-serif leading-relaxed">"{testimonial.text}"</p>
              <div className="flex flex-col items-center">
                <span className="font-bold uppercase tracking-wider text-sm">{testimonial.author}</span>
                <span className="text-xs text-primary/60 uppercase tracking-widest mt-1">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
