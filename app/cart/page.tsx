"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const isEmpty = cart.length === 0;

  return (
    <div>
      <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mb-16">
        <Image
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
          alt="Cart Header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-4">Shopping Cart</h1>
            <p className="text-lg font-light tracking-wide max-w-xl mx-auto text-white/90">
              {isEmpty ? "Your selected items." : "Review your selection before checkout."}
            </p>
          </FadeIn>
        </div>
      </div>

      {isEmpty ? (
        <div className="min-h-[40vh] pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Link
              href="/collection"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              Start Shopping
            </Link>
          </FadeIn>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              {cart.map((item) => (
                <FadeIn key={`${item.id}-${item.size}`}>
                  <div className="flex gap-6 py-6 border-b border-border">
                    <div className="relative w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-secondary/20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg md:text-xl font-bold mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{item.category}</p>
                          {item.size && (
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                              Size: {item.size}
                            </p>
                          )}
                        </div>
                        <p className="font-bold text-lg">{item.price}</p>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-border rounded-none">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="lg:col-span-4">
              <FadeIn delay={0.2}>
                <div className="bg-secondary/10 p-8 border border-border sticky top-32">
                  <h2 className="text-xl font-serif font-bold mb-6 uppercase tracking-wider">Order Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-bold">${cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-xs uppercase tracking-wider">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="text-xs uppercase tracking-wider">Calculated at checkout</span>
                    </div>
                    
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${cartTotal}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-4 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                    Checkout
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Secure Checkout. Free shipping on orders over $500.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
