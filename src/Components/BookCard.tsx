"use client";

import { useCart } from "@/context/CartContext";
import type { Book } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  const { add } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 font-semibold">${book.price.toFixed(2)}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{book.description}</p>
        <button
          type="button"
          onClick={() => add(book)}
          className="mt-3 w-full rounded-lg bg-blue-600 text-white py-2 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
