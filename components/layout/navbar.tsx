import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Events", href: "/events" },
  { name: "Venues", href: "/venues" },
  { name: "Curations", href: "/curations" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  return (
    <nav className="fixed w-full z-sticky h-16 bg-slate-950/5 backdrop-blur-xl px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white font-plus-jakarta">
          Dickets
        </div>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/10 px-4 py-2 rounded-full text-xs text-white">
            Ghana
          </div>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
