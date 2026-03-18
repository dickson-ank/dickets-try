// components/Hero.tsx
"use client";

import { useState, useRef, useEffect } from "react";
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
  { id: "all", label: "All", icon: <MdApps size={14} /> },
  { id: "concerts", label: "Concerts", icon: <MdMusicNote size={14} /> },
  { id: "festivals", label: "Festivals", icon: <MdCelebration size={14} /> },
  { id: "tech", label: "Tech", icon: <MdDevices size={14} /> },
  { id: "business", label: "Business", icon: <MdBusiness size={14} /> },
];

type HeroProps = {
  onSearch?: (query: string, location: Location) => void;
};

export default function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState("");
  const [activeLocation, setLocation] = useState<Location>(locations[0]);
  const [dropdownOpen, setDropdown] = useState(false);
  const [activeCategory, setCategory] = useState("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section
      className="relative overflow-hidden section-padding animate-fade-in"
      style={{ background: "#080d1f" }}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(59,127,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse at 15% 60%, rgba(59,127,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 30%, rgba(179,17,0,0.07) 0%, transparent 50%)
          `,
        }}
      />

      {/* horizontal line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 32px,
            rgba(255,255,255,0.018) 32px,
            rgba(255,255,255,0.018) 33px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-lg flex flex-col items-center text-center gap-sp-7">
        {/* Overline badge */}
        <div
          className="inline-cluster-sm rounded-full px-sp-4 py-sp-2 border animate-slide-up"
          style={{
            background: "rgba(59,127,255,0.12)",
            borderColor: "rgba(59,127,255,0.22)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#3b7fff" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#3b7fff" }}
          >
            50,000+ events across Africa
          </span>
        </div>

        {/* Headline — 3 lines, mixed weights */}
        <h1 className="animate-slide-up" style={{ lineHeight: 1.05 }}>
          <span
            className="block text-4xl md:text-display font-light tracking-tight"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Africa&apos;s
          </span>
          <span className="block text-4xl md:text-display font-bold tracking-tight text-white">
            Rhythms,
          </span>
          <span
            className="block text-4xl md:text-display font-bold tracking-tight"
            style={{ color: "#ff4d3d" }}
          >
            One Ticket Away.
          </span>
        </h1>

        {/* Search bar — dark on dark */}
        <div className="w-full max-w-2xl animate-slide-up">
          <div
            className="flex flex-col md:flex-row items-stretch md:items-center gap-sp-1 md:gap-sp-2
                       rounded-2xl border p-sp-2"
            style={{
              background: "#0e1535",
              borderColor: "rgba(255,255,255,0.13)",
              boxShadow:
                "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Row: location + divider + input */}
            <div className="flex items-center gap-sp-2 flex-1 min-w-0 px-sp-2">
              {/* Location dropdown */}
              <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setDropdown((v) => !v)}
                  className="inline-cluster-sm rounded-xl px-sp-3 py-sp-2 text-sm font-semibold
                             border cursor-pointer transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="listbox"
                >
                  <MdLocationOn size={14} style={{ color: "#3b7fff" }} />
                  <span>{activeLocation.name}</span>
                  <MdKeyboardArrowDown
                    size={14}
                    className={`transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-sp-2 w-52 rounded-xl border p-sp-1
                               z-dropdown animate-scale-in"
                    style={{
                      background: "#0e1535",
                      borderColor: "rgba(255,255,255,0.13)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                    }}
                    role="listbox"
                  >
                    {locations.map((loc) => {
                      const selected = activeLocation.code === loc.code;
                      return (
                        <button
                          key={loc.code}
                          role="option"
                          aria-selected={selected}
                          onClick={() => {
                            setLocation(loc);
                            setDropdown(false);
                          }}
                          className="w-full flex items-center gap-sp-3 px-sp-4 py-sp-3 rounded-lg
                                     text-sm font-medium cursor-pointer transition-colors"
                          style={{
                            background: selected
                              ? "rgba(59,127,255,0.15)"
                              : "transparent",
                            color: selected
                              ? "#3b7fff"
                              : "rgba(255,255,255,0.7)",
                          }}
                        >
                          <span className="text-base">{loc.flag}</span>
                          <span className="flex-1 text-left">{loc.name}</span>
                          {selected && (
                            <MdCheck size={14} style={{ color: "#3b7fff" }} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Vertical divider */}
              <div
                className="w-px h-5 flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.13)" }}
              />

              {/* Input */}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && onSearch?.(query, activeLocation)
                }
                placeholder="Where's the pulse?"
                className="flex-1 bg-transparent outline-none text-sm font-sans min-w-0 text-white
                           placeholder:text-white/40"
              />
            </div>

            {/* Search button — full width on mobile */}
            <button
              onClick={() => onSearch?.(query, activeLocation)}
              className="inline-cluster-sm justify-center rounded-xl px-sp-5 py-sp-3 text-sm
                         font-semibold text-white border-none cursor-pointer transition-colors
                         flex-shrink-0"
              style={{ background: "#3b7fff" }}
            >
              <MdSearch size={16} />
              <span>Search in {activeLocation.name}</span>
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div
          className="inline-cluster gap-sp-2 overflow-x-auto w-full justify-center
                        scrollbar-none pb-sp-1"
        >
          {categories.map(({ id, label, icon }) => {
            const active = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => setCategory(id)}
                className="inline-cluster-sm flex-shrink-0 rounded-full px-sp-4 py-sp-2
                           text-sm font-medium border cursor-pointer transition-colors"
                style={{
                  background: active ? "rgba(59,127,255,0.15)" : "transparent",
                  borderColor: active ? "#3b7fff" : "rgba(255,255,255,0.07)",
                  color: active ? "#3b7fff" : "rgba(255,255,255,0.4)",
                }}
              >
                {icon}
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
