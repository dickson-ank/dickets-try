import { MdSearch } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center backdrop:blur-sm"
        style={{ backgroundImage: "url('/hero-bg.pn')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl">
        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-6 block">
          Exclusively Curated For You
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-12">
          Discover the Soul <br /> of{" "}
          <span className="text-yellow-400">West Africa.</span>
        </h1>

        {/* Concierge Search Pill */}
        <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl rounded-full p-2 w-full max-w-3xl mx-auto border border-white/10">
          <div className="flex items-center flex-1 px-6 gap-3">
            <MdSearch className="text-slate-400 w-5 h-5" />
            <input
              placeholder="Search festivals, private dinners..."
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-500"
            />
          </div>
          <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
          <div className="px-6 py-3 flex items-center gap-2">
            <span className="text-slate-400 text-sm">Location</span>
            <select className="bg-transparent text-white font-bold outline-none cursor-pointer">
              <option>Accra</option>
              <option>Kumasi</option>
            </select>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-full font-bold transition-all">
            Find Access
          </button>
        </div>
      </div>
    </section>
  );
}
