"use client";

export default function Newsletter() {
  return (
    <section className="py-32 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Club</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          Subscribe to receive updates, access to exclusive deals, and more. 
          First time subscribers get 10% off their first order.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
          />
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-6 uppercase tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
