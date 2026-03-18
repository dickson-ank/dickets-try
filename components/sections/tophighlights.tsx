"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MdCalendarToday,
  MdLocationOn,
  MdAccessTime,
  MdArrowForward,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";

type Event = {
  id: string;
  title: string;
  category: string;
  badge?: string;
  badgeType?: "hot" | "limited" | "free";
  date: string;
  dateIcon: "time" | "date";
  location: string;
  price: string;
  image: string;
};

const events: Event[] = [
  {
    id: "1",
    title: "Wizkid Live in Kumasi",
    category: "Concert",
    badge: "Fast Selling",
    badgeType: "hot",
    date: "19:00 GMT",
    dateIcon: "time",
    location: "Baba Yara Stadium",
    price: "GHS 120.00",
    image: "https://picsum.photos/seed/wizkid/600/400",
  },
  {
    id: "2",
    title: "Afrofuture 2024",
    category: "Festival",
    badge: "Limited",
    badgeType: "limited",
    date: "Dec 28–29",
    dateIcon: "date",
    location: "El Wak Stadium",
    price: "GHS 450.00",
    image: "https://picsum.photos/seed/afrofest/600/400",
  },
  {
    id: "3",
    title: "Neon Jungle: Volume 5",
    category: "Club Night",
    date: "22:00 – Late",
    dateIcon: "time",
    location: "Front/Back, Osu",
    price: "GHS 100.00",
    image: "https://picsum.photos/seed/neonjungle/600/400",
  },
];

const badgeClass: Record<string, string> = {
  hot: "badge badge-secondary",
  limited: "badge badge-warning",
  free: "badge badge-success",
};

type TopHighlightsProps = {
  onViewAll?: () => void;
};

function HighlightCard({ event }: { event: Event }) {
  const [saved, setSaved] = useState(false);
  const DateIcon = event.dateIcon === "time" ? MdAccessTime : MdCalendarToday;

  return (
    <div className="card-interactive px-0 pt-0 flex flex-col overflow-hidden rounded-lg group bg-layer-02 border border-border">
      <div className="relative overflow-hidden h-52">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => !s);
          }}
          aria-label={saved ? "Unsave" : "Save"}
          className="absolute top-sp-3 right-sp-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm focus-ring transition-all-fast hover:scale-110"
        >
          {saved ? (
            <MdFavorite size={16} className="text-secondary" />
          ) : (
            <MdFavoriteBorder size={16} className="text-muted-foreground" />
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-sp-3 p-sp-5">
        <div className="flex items-center justify-between gap-sp-3">
          <span className="text-overline">{event.category}</span>
          {event.badge && event.badgeType && (
            <span className={badgeClass[event.badgeType]}>{event.badge}</span>
          )}
        </div>

        <h3 className="text-sm font-semibold text-foreground leading-snug">
          {event.title}
        </h3>

        <div className="stack-xs mt-auto pt-sp-2">
          <span className="inline-cluster-sm text-caption">
            <DateIcon size={13} className="text-muted-foreground" />
            {event.date}
          </span>
          <span className="inline-cluster-sm text-caption">
            <MdLocationOn size={13} className="text-muted-foreground" />
            {event.location}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-layer-01 border-t border-border px-sp-5 py-sp-4">
        <span className="text-sm font-semibold text-foreground">
          {event.price}
        </span>
        <button className="btn-primary btn-sm">Book Now</button>
      </div>
    </div>
  );
}

export default function TopHighlights({ onViewAll }: TopHighlightsProps) {
  return (
    <section className="section-padding bg-layer-01">
      <div className="container-lg stack-md">
        <div className="flex items-center justify-between">
          <div className="stack-xs">
            <h2 className="text-h3">Top Highlights</h2>
            <p className="text-caption">
              The most anticipated events of the season.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="btn-outline btn-xs rounded-full inline-cluster-sm shrink-0"
          >
            View All
            <MdArrowForward size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-sp-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <HighlightCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
