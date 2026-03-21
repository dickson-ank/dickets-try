import Image from "next/image";
import { MdSearch } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-xs px-4 overflow-hidden midnight-gradient">
      {/* Background Image with Overlay */}
      <Image
        src="/bg-gradient.png"
        alt="Background"
        className="absolute inset-0 z-base opacity-60 bg-cover bg-center backdrop:blur-sm"
        fill
        priority
      />
      <div className="absolute inset-0 z-base bg-linear-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-raised max-w-4xl">
        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-6 block">
          50,000+ Events. Endless Experiences.
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-[0.9] mb-12">
          Search <br />
          <span className="text-tone"> Events, Artists, Location...</span>
        </h1>

        {/* Search Pill */}
        <div className="inline-cluster min-w-[50vw] rounded-full min-h-16 bg-background px-3 container-content">
          <div className="flex items-center flex-1 px-2 gap-sp-3">
            <MdSearch className="text-slate-400 w-5 h-5" />
            <input
              placeholder="Search events, festivals..."
              className="bg-transparent border-none outline-none text-foreground/70 w-full placeholder:text-slate-500"
            />
          </div>
          <button className="bg-accent hover:bg-accent/80 text-white px-2 md:px-6 py-2 rounded-full font-bold transition-all">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
