"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollProgress from "./ScrollProgress";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-primary/10 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/buildsimple-website/logo.svg"
              alt="BuildSimple.ai"
              width={166}
              height={38}
              priority
            />
          </Link>

          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-primary/70">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
          </div>

          <Link
            href="/#waitlist"
            className="bg-accent text-white px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors font-semibold text-sm shadow-md shadow-accent/20"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>
    </>
  );
}
