import Image from "next/image";
import Link from "next/link";
import {
  MdCalendarToday,
  MdLocationOn,
  MdArrowForward,
  MdTrendingUp,
} from "react-icons/md";

type Event = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  price: string;
  image: string;
  featured?: boolean;
  tags?: string[];
};

const events: Event[] = [
  {
    id: "1",
    title: "Accra Jazz Nights: The Midnight Sessions",
    description:
      "An unforgettable evening of world-class jazz at Black Star Square.",
    category: "Music",
    date: "Dec 24, 2024",
    location: "Black Star Square",
    price: "From GH₵150",
    image: "https://picsum.photos/seed/jazz/800/600",
    featured: true,
    tags: ["Featured", "Music"],
  },
  {
    id: "2",
    title: "Ghana Web3 Summit 2024",
    description:
      "Exploring the future of decentralised technology across Africa.",
    category: "Tech & Innovation",
    date: "Dec 18, 2024",
    location: "Accra International Conference Centre",
    price: "From GH₵150",
    image: "https://picsum.photos/seed/tech/400/300",
  },
  {
    id: "3",
    title: "Acoustic Garden Brunch",
    description:
      "An afternoon of organic flavors and soul-soothing acoustic performances.",
    category: "Lifestyle",
    date: "Dec 28–29",
    location: "The Garden, East Legon",
    price: "GH₵ 280",
    image: "https://picsum.photos/seed/garden/400/300",
  },
  {
    id: "4",
    title: "Chale Wote Street Art Festival",
    description:
      "The largest alternative art festival in West Africa returns to James Town.",
    category: "Culture",
    date: "Dec 30, 2024",
    location: "James Town, Accra",
    price: "Free Access",
    image: "https://picsum.photos/seed/art/400/300",
  },
];

type TrendingProps = {
  onViewAll?: () => void;
};

export default function TrendingNow({ onViewAll }: TrendingProps) {
  const featured = events.find((e) => e.featured)!;
  const sideEvents = events.filter((e) => !e.featured);

  return (
    <section className="section-padding">
      <div className="container-lg stack-md">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <div className="stack-xs">
            <h2 className="text-h3 inline-cluster gap-sp-2">
              Trending Now
              <MdTrendingUp className="text-secondary" size={24} />
            </h2>
            <p className="text-caption">
              Hand-picked events making waves this week.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="btn-outline btn-xs inline-cluster-sm shrink-0"
          >
            View All
            <MdArrowForward size={15} />
          </button>
        </div>

        {/* Grid — stacks on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-sp-5">
          {/* Featured card */}
          <div className="card-interactive relative overflow-hidden rounded-lg min-h-80 hover-lift group">
            {/* Background image */}
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark gradient overlay — bottom-heavy so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Badges top-left */}
            <div className="absolute top-sp-4 left-sp-4 inline-cluster-sm">
              {featured.tags?.map((tag) => (
                <span
                  key={tag}
                  className={`badge ${tag === "Featured" ? "badge-gradient" : "badge-neutral"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-sp-6 stack-xs">
              <h3 className="text-h4 text-white">{featured.title}</h3>
              <div className="inline-cluster gap-sp-4">
                <span className="inline-cluster-sm text-xs text-white/75">
                  <MdCalendarToday size={13} />
                  {featured.date}
                </span>
                <span className="inline-cluster-sm text-xs text-white/75">
                  <MdLocationOn size={13} />
                  {featured.location}
                </span>
              </div>
            </div>
          </div>

          {/* Side event list */}
          <div className="stack-sm">
            {sideEvents.map((event) => (
              <div
                key={event.id}
                className="card-interactive flex gap-sp-4 group"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0 stack-xs">
                  <span className="text-overline text-secondary">
                    {event.category}
                  </span>
                  <p className="text-sm font-semibold text-foreground truncate-2 leading-snug">
                    {event.title}
                  </p>
                  <p className="truncate-2 text-caption">{event.description}</p>
                  <span
                    className={`text-xs font-semibold ${
                      event.price === "Free Access"
                        ? "text-success"
                        : "text-primary"
                    }`}
                  >
                    {event.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
