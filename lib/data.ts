export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Beige Trench",
    price: "$299",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: "2",
    name: "Structured Blazer",
    price: "$189",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=1000&auto=format&fit=crop",
    category: "Jackets",
  },
  {
    id: "3",
    name: "Silk Evening Dress",
    price: "$450",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
  },
  {
    id: "4",
    name: "Minimalist Wool Coat",
    price: "$349",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
  },
  {
    id: "5",
    name: "Pleated Midi Skirt",
    price: "$129",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "6",
    name: "Cashmere Turtleneck",
    price: "$220",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Knitwear",
  },
  {
    id: "7",
    name: "Leather Crossbody",
    price: "$280",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    isNew: true,
  },
  {
    id: "8",
    name: "Oversized Denim Jacket",
    price: "$150",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
    category: "Jackets",
  },
];

export const categories = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    slug: "new-arrivals",
  },
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    slug: "dresses",
  },
  {
    name: "Outerwear",
    image: "https://images.unsplash.com/photo-1544022613-e87ca19202d6?q=80&w=1000&auto=format&fit=crop",
    slug: "outerwear",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
    slug: "accessories",
  },
];

export const testimonials = [
  {
    text: "The quality of the silk dress is unmatched. It feels like a second skin and looks absolutely stunning.",
    author: "Sophie M.",
    role: "Fashion Editor",
  },
  {
    text: "Minimalist design at its finest. I love how versatile every piece in the collection is.",
    author: "James L.",
    role: "Creative Director",
  },
  {
    text: "Finally, a brand that understands modern luxury without the excessive branding. Pure elegance.",
    author: "Elena R.",
    role: "Architect",
  },
];
