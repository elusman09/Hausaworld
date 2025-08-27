import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <span className="text-red-600 font-bold text-xl cursor-pointer">Hausaworld</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/my-purchases">My Purchases</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/support">Support</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 p-4 gap-2">
          <Link href="/">Home</Link>
          <Link href="/my-purchases">My Purchases</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/support">Support</Link>
        </div>
      )}
    </nav>
  );
}
