import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/5 backdrop-blur-xl px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white font-plus-jakarta">
          The Curator.
        </div>

        <div className="flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link href="/events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link href="/venues" className="hover:text-white transition-colors">
            Venues
          </Link>
          <Link
            href="/curations"
            className="hover:text-white transition-colors"
          >
            Curations
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/10 px-4 py-2 rounded-full text-xs text-white">
            📍 Accra, GH
          </div>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
