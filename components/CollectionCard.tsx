"use client";

import Image from "next/image";
import { Product } from "@/lib/data";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface CollectionCardProps {
  product: Product;
}

export default function CollectionCard({ product }: CollectionCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-6">
        {/* New Label */}
        {product.isNew && (
          <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">New In</span>
          </div>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-black rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-neutral-100 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isAdding}
          >
            <Plus className={`w-6 h-6 transition-transform ${isAdding ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <div className="space-y-2 text-center group-hover:opacity-80 transition-opacity">
        <h3 className="text-lg font-serif font-medium">{product.name}</h3>
        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{product.category}</p>
        <p className="text-sm font-bold mt-2">{product.price}</p>
      </div>
    </div>
  );
}
