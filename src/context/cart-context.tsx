"use client";

import { products } from "@/data/sample-data";
import { CartItem } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface CartContextValue {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  updateQty: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("pharma-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pharma-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) return prev.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item));
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const updateQty = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)));
  };

  const removeFromCart = (productId: number) => setCart((prev) => prev.filter((item) => item.productId !== productId));

  const clearCart = () => setCart([]);

  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const total = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return sum + (product?.price ?? 0) * item.quantity;
      }, 0),
    [cart],
  );

  return <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, itemCount, total }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
