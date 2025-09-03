import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-xl font-bold">DevBooks</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Curated books for developers. Learn faster. Build better.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2">
             <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-blue-400" href="#">FAQ</a></li>
            <li><a className="hover:text-blue-400" href="#">Shipping</a></li>
            <li><a className="hover:text-blue-400" href="#">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-blue-400" href="#">About</a></li>
            <li><a className="hover:text-blue-400" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevBooks. All rights reserved.
      </div>
    </footer>
  );
}
