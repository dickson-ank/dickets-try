"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MdLocationOn,
  MdSearch,
  MdKeyboardArrowDown,
  MdMusicNote,
  MdCelebration,
  MdBusiness,
  MdDevices,
  MdApps,
  MdCheck,
} from "react-icons/md";

type Location = {
  code: string;
  name: string;
  flag: string;
};

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const locations: Location[] = [
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
];

const categories: Category[] = [
  { id: "all", label: "All", icon: <MdApps size={15} /> },
  { id: "concerts", label: "Concerts", icon: <MdMusicNote size={15} /> },
  { id: "festivals", label: "Festivals", icon: <MdCelebration size={15} /> },
  { id: "tech", label: "Tech", icon: <MdDevices size={15} /> },
  { id: "business", label: "Business", icon: <MdBusiness size={15} /> },
];

type HeroProps = {
  onSearch?: (query: string, location: Location) => void;
};

export default function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <section className="relative overflow-hidden section-padding animate-fade-in">
      {/* Background image — next/image for optimization */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center opacity-45"
        aria-hidden="true"
      />

      {/* Subtle overlay so text stays readable over any image brightness */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content — sits above image and overlay */}
      <div className="relative z-10 container-lg flex flex-col items-center text-center gap-sp-8">
        {/* Overline */}
        <span className="text-overline text-secondary">
          50,000+ Events Across Africa
        </span>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-foreground block">Africa&apos;s Rhythms,</span>
          <span className="text-secondary block">One Ticket Away.</span>
        </h1>

        {/* Search bar */}
        <div className="w-full max-w-2xl animate-slide-up">
          <div className="flex items-center gap-sp-2 bg-background rounded-full border border-border shadow-md px-sp-4 py-sp-5">
            {/* Location selector */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="inline-cluster rounded-full bg-layer-01 border border-border px-sp-4 py-sp-2 text-sm font-medium text-foreground hover:bg-layer-03 transition-colors cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <MdLocationOn size={15} className="text-primary" />
                <span>{activeLocation.code}</span>
                <MdKeyboardArrowDown
                  size={15}
                  className={`text-muted-foreground transition-transform duration-150 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-sp-2 w-48 bg-background border border-border rounded-lg shadow-lg p-sp-1 z-dropdown animate-scale-in"
                  role="listbox"
                >
                  {locations.map((loc) => (
                    <button
                      key={loc.code}
                      role="option"
                      aria-selected={activeLocation.code === loc.code}
                      onClick={() => {
                        setActiveLocation(loc);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-sp-3 px-sp-4 py-sp-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        activeLocation.code === loc.code
                          ? "text-primary"
                          : "text-foreground hover:bg-layer-01"
                      }`}
                    >
                      <span className="text-base">{loc.flag}</span>
                      <span className="flex-1 text-left">{loc.name}</span>
                      {activeLocation.code === loc.code && (
                        <MdCheck size={14} className="text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-border shrink-0" />

            {/* Search input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && onSearch?.(query, activeLocation)
              }
              placeholder="Search for events, artists, or venues"
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground font-sans min-w-0"
            />

            {/* Search button */}
            <button
              onClick={() => onSearch?.(query, activeLocation)}
              className="gradient-primary btn-sm rounded-full shrink-0 inline-cluster-sm"
            >
              <MdSearch size={15} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="inline-cluster gap-sp-2">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`inline-cluster-sm rounded-full px-sp-4 py-sp-2 text-sm font-medium border transition-colors cursor-pointer ${
                activeCategory === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:bg-layer-01 hover:text-foreground"
              }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
