export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-primary-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} BuildSimple. All rights reserved.
      </div>
    </footer>
  );
}
