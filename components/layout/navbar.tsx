"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdSearch,
  MdAccountCircle,
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
      <header className="nav-header">
        <Link
          href="/"
          className="nav-logo text-primary text-h3 font-bold no-underline absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          Dickets
        </Link>

        <button className="nav-item md:hidden" aria-label="Search">
          <MdSearch size={20} />
        </button>

        <nav className="hidden md:flex items-center gap-sp-1 ml-auto">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`nav-item ${pathname === href ? "active" : ""}`}
            >
              {name}
            </Link>
          ))}

          <div className="nav-actions">
            <div className="nav-avatar">
              <MdAccountCircle size={18} />
            </div>
          </div>
        </nav>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-fixed flex bg-background border-t border-border pb-[env(safe-area-inset-bottom)]">
        {navLinks.map(({ name, href, icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-sp-1 py-sp-3 text-xs font-medium transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
