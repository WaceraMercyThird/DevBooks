"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Book } from "@/lib/books";

export type CartItem = { book: Book; qty: number };

type CartContextType = {
  items: CartItem[];
  totalQty: number;
  totalPrice: number;
  add: (book: Book) => void;
  remove: (id: string) => void;
  changeQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "devbooks_cart_v1";

function useCartState() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (book: Book) => {
    setItems((prev) => {
      const found = prev.find((i) => i.book.id === book.id);
      if (found) {
        return prev.map((i) =>
          i.book.id === book.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { book, qty: 1 }];
    });
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.book.id !== id));
  };

  const changeQty = (id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.book.id === id ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const clear = () => setItems([]);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.book.price * i.qty, 0);

  return { items, totalQty, totalPrice, add, remove, changeQty, clear };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const value = useCartState();
const memo = useMemo(() => value, [value]);
return <CartContext.Provider value={memo}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
