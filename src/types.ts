export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  rxRequired: boolean;
  image: string;
  description: string;
  composition: string;
  uses: string;
  sideEffects: string;
}

export interface Category {
  name: string;
  icon: string;
  count: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
}
