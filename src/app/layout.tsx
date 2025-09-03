import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "DevBooks — E-commerce for Developer Books",
  description: "A minimal Next.js e-commerce starter for dev books.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">
        <CartProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
