// components/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdSearch,
  MdHome,
  MdExplore,
  MdConfirmationNumber,
  MdPerson,
} from "react-icons/md";

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: <MdHome size={22} /> },
  { name: "Explore", href: "/explore", icon: <MdExplore size={22} /> },
  {
    name: "Tickets",
    href: "/tickets",
    icon: <MdConfirmationNumber size={22} />,
  },
  { name: "Profile", href: "/profile", icon: <MdPerson size={22} /> },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Top bar ───────────────────────────────────────── */}
      <header
        className="sticky top-0 z-fixed flex items-center justify-between px-sp-5 h-16 border-b"
        style={{
          background: "rgba(8,13,31,0.97)",
          borderColor: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Mobile: search icon — hidden on desktop */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.07)",
          }}
          aria-label="Search"
        >
          <MdSearch size={18} className="text-white/60" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-white no-underline
                     absolute left-1/2 -translate-x-1/2
                     md:static md:translate-x-0"
        >
          Dic<span className="text-primary">.</span>kets
        </Link>

        {/* Desktop: nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-sp-1 mx-auto">
          {navLinks.map(({ name, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-sp-4 py-sp-2 rounded-full text-sm font-medium no-underline transition-colors
                  ${
                    active
                      ? "text-white font-semibold bg-white/10"
                      : "text-white/40 hover:text-white/70 hover:bg-white/[0.06]"
                  }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-sp-3">
          {/* Desktop: auth buttons */}
          <button
            className="hidden md:block px-sp-4 py-sp-2 rounded-lg text-sm font-semibold
                       text-white/70 border cursor-pointer font-sans
                       hover:bg-white/[0.06] hover:text-white transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.13)",
              background: "transparent",
            }}
          >
            Sign in
          </button>
          <button className="hidden md:block btn-primary btn-sm rounded-lg">
            Get Started
          </button>

          {/* Avatar — always visible */}
          <div className="relative">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center
                         text-sm font-bold text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1a4fa8, #3b7fff)",
              }}
              aria-label="Account"
            >
              A
            </div>
            {/* notification dot */}
            <span
              className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary border-2"
              style={{ borderColor: "#080d1f" }}
            />
          </div>
        </div>
      </header>

      {/* ── Mobile bottom tab bar ─────────────────────────── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-fixed flex border-t pb-[env(safe-area-inset-bottom)]"
        style={{
          background: "#0e1535",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        {navLinks.map(({ name, href, icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-sp-1
                         py-sp-3 text-xs font-medium no-underline transition-colors relative
                         ${active ? "text-primary" : "text-white/30"}`}
            >
              {icon}
              <span>{name}</span>
              {/* active pip */}
              {active && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
