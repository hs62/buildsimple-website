import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-primary-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} BuildSimple. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="hover:text-white/70 transition-colors"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/terms#privacy"
            className="hover:text-white/70 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
