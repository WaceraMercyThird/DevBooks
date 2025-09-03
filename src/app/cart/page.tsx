"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, totalPrice, changeQty, remove, clear } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-6 rounded-xl border bg-white p-6 text-center">
          <p className="text-gray-700">Your cart is empty.</p>
          <Link href="/" className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map(({ book, qty }) => (
              <div key={book.id} className="flex gap-4 rounded-xl border bg-white p-4">
                <img src={book.image} alt={book.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="mt-1 font-semibold">${book.price.toFixed(2)}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <label className="text-sm text-gray-600">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => changeQty(book.id, Number(e.target.value))}
                      className="w-20 rounded border px-2 py-1"
                    />
                    <button
                      onClick={() => remove(book.id)}
                      className="ml-auto text-red-600 hover:underline"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-xl border bg-white p-6 h-fit">
            <h2 className="font-semibold text-gray-900">Order Summary</h2>
            <div className="mt-3 flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Shipping and taxes calculated at checkout.</p>
            <button
              className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
              type="button"
              onClick={() => alert("This is a demo checkout.")}
            >
              Checkout
            </button>
            <button
              className="mt-3 w-full rounded-lg border py-2 hover:bg-gray-50"
              type="button"
              onClick={clear}
            >
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
