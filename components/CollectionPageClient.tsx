"use client";

import { useState } from "react";
import CollectionCard from "@/components/CollectionCard";
import FadeIn from "@/components/FadeIn";
import { Product } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

interface CollectionPageClientProps {
  products: Product[];
  categories: string[];
}

export default function CollectionPageClient({ products, categories }: CollectionPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = products
    .filter((product) => selectedCategory ? product.category === selectedCategory : true)
    .sort((a, b) => {
      if (!sortOrder) return 0;
      const priceA = parseInt(a.price.replace("$", ""));
      const priceB = parseInt(b.price.replace("$", ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-col lg:flex-row gap-12 pt-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex justify-between items-center mb-6">
        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-border px-4 py-3 w-full justify-center hover:bg-neutral-100 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter & Sort
        </button>
      </div>

      {/* Sidebar Filters (Desktop) */}
      <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
        <div>
          <h3 className="font-serif text-xl font-bold mb-6">Categories</h3>
          <div className="space-y-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`block text-sm uppercase tracking-widest hover:text-primary transition-colors text-left w-full ${
                selectedCategory === null ? "font-bold text-primary" : "text-muted-foreground"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block text-sm uppercase tracking-widest hover:text-primary transition-colors text-left w-full ${
                  selectedCategory === category ? "font-bold text-primary" : "text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold mb-6">Sort By</h3>
          <div className="space-y-3">
            <button
              onClick={() => setSortOrder(null)}
              className={`block text-sm uppercase tracking-widest hover:text-primary transition-colors text-left w-full ${
                sortOrder === null ? "font-bold text-primary" : "text-muted-foreground"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSortOrder("asc")}
              className={`block text-sm uppercase tracking-widest hover:text-primary transition-colors text-left w-full ${
                sortOrder === "asc" ? "font-bold text-primary" : "text-muted-foreground"
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setSortOrder("desc")}
              className={`block text-sm uppercase tracking-widest hover:text-primary transition-colors text-left w-full ${
                sortOrder === "desc" ? "font-bold text-primary" : "text-muted-foreground"
              }`}
            >
              Price: High to Low
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-background z-50 p-6 shadow-xl lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-2xl font-bold">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold uppercase tracking-widest mb-4 text-sm">Category</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-sm uppercase tracking-widest w-full text-left py-2 border-b border-border/50 ${
                        selectedCategory === null ? "font-bold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`block text-sm uppercase tracking-widest w-full text-left py-2 border-b border-border/50 ${
                          selectedCategory === category ? "font-bold text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold uppercase tracking-widest mb-4 text-sm">Sort By</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSortOrder(null);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-sm uppercase tracking-widest w-full text-left py-2 border-b border-border/50 ${
                        sortOrder === null ? "font-bold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Featured
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("asc");
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-sm uppercase tracking-widest w-full text-left py-2 border-b border-border/50 ${
                        sortOrder === "asc" ? "font-bold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Price: Low to High
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("desc");
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-sm uppercase tracking-widest w-full text-left py-2 border-b border-border/50 ${
                        sortOrder === "desc" ? "font-bold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Showing {filteredProducts.length} results
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CollectionCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-sm font-bold uppercase tracking-widest border-b border-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
