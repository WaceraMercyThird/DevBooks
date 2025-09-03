"use client";

import Link from "next/link";
import { ShoppingCart, Search, BookOpen } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { totalQty } = useCart();
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    const url = query ? `/?q=${encodeURIComponent(query)}` : "/";
    router.push(url);
  }

  return (
    <nav className="fixed top-0 left-0 z-40 w-full bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600">
          <BookOpen className="w-6 h-6" aria-hidden />
          DevBooks
        </Link>

        <form onSubmit={submit} className="hidden md:flex flex-1">
          <div className="flex w-full items-center gap-2 rounded-xl border px-3 py-2">
            <Search className="w-4 h-4 opacity-60" aria-hidden />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search books, topics, authors…"
              className="w-full outline-none bg-transparent"
              aria-label="Search books"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-6">
          <Link href="/cart" className="relative hover:text-blue-600">
            <ShoppingCart className="w-6 h-6" aria-hidden />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 rounded-full">
                {totalQty}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
