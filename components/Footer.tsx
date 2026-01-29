import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-tight">LUXE</h3>
            <p className="text-neutral-400 leading-relaxed font-light">
              Redefining modern luxury with sustainable, timeless pieces designed for the contemporary wardrobe. 
              Ethically crafted in our ateliers in Paris and Milan.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-neutral-500">Shop</h4>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li><Link href="#" className="hover:text-white transition-colors block py-1">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Accessories</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Sale</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-neutral-500">Help</h4>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors block py-1">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-neutral-500">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 uppercase tracking-wider">
          <p>&copy; 2026 LUXE Fashion. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
