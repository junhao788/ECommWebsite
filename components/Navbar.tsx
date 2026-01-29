"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingBag, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { cartCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isHome = pathname === "/";
  
  // Logic: 
  // - If NOT scrolled: Standard Transparent Navbar
  // - If Scrolled: Navbar hides. Show small "Menu" button.
  // - If Scrolled AND Menu Clicked: Show Standard Navbar with solid background.

  const showNavbar = !isScrolled || isMenuOpen;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          showNavbar 
            ? isScrolled 
              ? "py-4 bg-background/95 backdrop-blur-md border-b border-border shadow-sm" // Scrolled & Open
              : "py-6 bg-transparent border-b border-white/10" // Top
            : "py-4 pointer-events-none opacity-0" // Scrolled & Closed (Hidden)
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 pointer-events-auto">
              <Link href="/" className={`text-3xl font-serif font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                LUXE
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block pointer-events-auto">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`text-sm font-medium uppercase tracking-[0.2em] hover:opacity-70 transition-opacity relative group ${
                      pathname === link.href ? "opacity-100" : "opacity-80"
                    } ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${
                      pathname === link.href ? "w-full" : ""
                    }`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className={`flex items-center gap-6 pointer-events-auto ${isScrolled ? "text-foreground" : "text-white"}`}>
              <button className="p-2 hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/cart" className="relative p-2 hover:opacity-70 transition-opacity group">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Close Button when Scrolled & Open */}
              {isScrolled && isMenuOpen && (
                 <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:opacity-70 transition-opacity">
                    <X className="w-6 h-6" />
                 </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Menu Button (Only when Scrolled and Menu is Closed) */}
      <motion.button 
        onClick={() => setIsMenuOpen(true)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isScrolled && !isMenuOpen ? 1 : 0,
          y: isScrolled && !isMenuOpen ? 0 : -20,
          pointerEvents: isScrolled && !isMenuOpen ? "auto" : "none"
        }}
        className="fixed top-6 right-6 z-50 bg-white text-black px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 pointer-events-auto hover:bg-neutral-100 transition-colors"
      >
        <Menu className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">Menu</span>
      </motion.button>
    </>
  );
}
