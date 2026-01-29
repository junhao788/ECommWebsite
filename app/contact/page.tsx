"use client";

import FadeIn from "@/components/FadeIn";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Header */}
      <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-4">Contact Us</h1>
            <p className="text-lg font-light tracking-wide max-w-xl mx-auto text-white/90">
              We'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold">Get in Touch</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a question about an order, a collaboration, or just want to say hello? 
                Fill out the form below or reach out to us directly.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-xs tracking-[0.2em] mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Fashion Ave, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-xs tracking-[0.2em] mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@luxe-fashion.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-xs tracking-[0.2em] mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="space-y-6 bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-sm border border-border" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em]">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em]">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em]">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground py-4 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
