import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  CarFront,
  Bike,
  KeyRound,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Sparkles,
  Gauge,
  CheckCircle2,
  ChevronDown,
  MoveUpRight,
} from "lucide-react";

import VideoBackground from "../components/Background/VideoBackground";
import homeVideo from "../components/Background/Home.bg.mp4";

const categories = [
  {
    title: "Luxury Cars",
    subtitle: "Experience premium driving",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1100&q=90",
    number: "01",
  },
  {
    title: "Sports Cars",
    subtitle: "Power. Performance. Passion.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=90",
    number: "02",
  },
  {
    title: "Motorcycles",
    subtitle: "Find your next adventure",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1100&q=90",
    number: "03",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Marketplace",
    text: "Explore vehicles with clear details and seller information.",
  },
  {
    icon: BadgeCheck,
    title: "More Choices",
    text: "Discover cars and bikes across brands and budgets.",
  },
  {
    icon: Headphones,
    title: "Simple Experience",
    text: "A convenient experience for buyers, sellers and renters.",
  },
  {
    icon: Gauge,
    title: "Your Perfect Ride",
    text: "Find a vehicle that matches your lifestyle.",
  },
];

function HomePage({ navigate, setSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(query);
    navigate("Buy");
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* FIXED VIDEO BACKGROUND - FULL PAGE */}
      <VideoBackground src={homeVideo} />

      {/* ALL PAGE CONTENT */}
      <div className="relative z-10">

        {/* =====================================
            HERO SECTION
        ===================================== */}

        <section className="hero relative isolate min-h-[680px] overflow-hidden border-b border-white/10 lg:min-h-[760px]">

          {/* Red ambient lighting */}
          <div className="pointer-events-none absolute -left-40 top-1/4 z-0 h-[450px] w-[450px] animate-pulse rounded-full bg-red-700/20 blur-[150px]" />

          <div className="pointer-events-none absolute right-[10%] top-[15%] z-0 h-[350px] w-[350px] animate-float rounded-full bg-red-600/10 blur-[130px]" />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1500px] items-center px-5 py-12 sm:px-10 lg:min-h-[760px] lg:px-16">

            <div className="page-enter max-w-3xl">

              {/* Brand badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-black/50 px-5 py-3 shadow-[0_0_30px_rgba(229,9,47,0.12)] backdrop-blur-xl">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-red-500/50 bg-red-600/20 text-xs font-black text-red-400">
                  CB
                </span>

                <span className="text-xs font-black tracking-[3px] text-white">
                  CARBYKE
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_#e5092f]" />

                <span className="text-[9px] font-bold tracking-[2px] text-red-300">
                  PREMIUM MOBILITY
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-[86px]">
                FIND YOUR
                <br />
                NEXT
                <span className="text-gradient red-glow"> DRIVE.</span>
                <br />
                <span className="text-white/90">OWN THE ROAD.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
                Discover exceptional cars and bikes. Buy, sell or rent your next
                ride with <span className="font-bold text-white">CARBYKE</span> —
                one destination for every journey.
              </p>

              {/* Search */}
              <form
                onSubmit={handleSearch}
                className="glass-panel mt-10 flex max-w-2xl flex-col gap-2 rounded-2xl p-2 sm:flex-row"
              >
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search size={21} className="shrink-0 text-red-500" />

                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search cars, bikes or brands..."
                    className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-8 py-4 text-sm font-black shadow-lg shadow-red-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(229,9,47,0.4)]"
                >
                  Search Vehicles
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Main buttons */}
              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("Buy")}
                  className="group flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-sm font-black text-white shadow-[0_8px_30px_rgba(229,9,47,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(229,9,47,0.4)]"
                >
                  Explore Vehicles
                  <ArrowUpRight
                    size={19}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <button
                  onClick={() => navigate("Rent")}
                  className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/15"
                >
                  <KeyRound
                    size={18}
                    className="text-red-400 transition group-hover:rotate-12"
                  />
                  Rent a Vehicle
                </button>
              </div>

              {/* Trust points */}
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-xs text-gray-300">
                {["Easy Experience", "Trusted Marketplace", "Cars & Bikes"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-red-500" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Bottom right label */}
          <div className="absolute bottom-10 right-12 z-10 hidden items-center gap-4 lg:flex">
            <span className="text-[10px] font-bold tracking-[4px] text-white/50">
              DISCOVER THE DIFFERENCE
            </span>
            <span className="h-px w-16 bg-red-500" />
          </div>

          {/* Scroll indicator */}
          <a
            href="#carbyke-services"
            className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[3px] text-white/50 transition hover:text-red-400 sm:flex"
          >
            SCROLL TO EXPLORE
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        </section>

        {/* =====================================
            BUY SELL RENT
        ===================================== */}

        <section
          id="carbyke-services"
          className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-10 lg:px-16"
        >
          <div className="mb-14 text-center">
            <p className="text-xs font-black tracking-[4px] text-red-500">
              THE CARBYKE EXPERIENCE
            </p>

            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              EVERYTHING YOU NEED,
              <span className="text-gradient"> ONE PLACE.</span>
            </h2>

            <p className="mt-5 text-sm text-gray-400">
              One destination. Multiple possibilities. Endless journeys.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {/* BUY */}
            <button
              onClick={() => navigate("Buy")}
              className="group vehicle-card rounded-2xl p-8 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500 transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <CarFront size={32} />
                </div>

                <span className="text-xs font-bold tracking-[3px] text-white/20">
                  01
                </span>
              </div>

              <h3 className="mt-9 text-2xl font-black">Buy Vehicles</h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Explore second-hand cars and bikes and discover a vehicle that
                matches your style and budget.
              </p>

              <span className="mt-8 flex items-center gap-3 text-sm font-bold text-red-500">
                Explore Vehicles
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-2"
                />
              </span>
            </button>

            {/* SELL */}
            <button
              onClick={() => navigate("Sell")}
              className="group vehicle-card rounded-2xl p-8 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500 transition duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <Bike size={32} />
                </div>

                <span className="text-xs font-bold tracking-[3px] text-white/20">
                  02
                </span>
              </div>

              <h3 className="mt-9 text-2xl font-black">Sell Vehicles</h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                List your car or bike and connect with potential buyers through
                the CARBYKE marketplace.
              </p>

              <span className="mt-8 flex items-center gap-3 text-sm font-bold text-red-500">
                Sell Your Vehicle
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-2"
                />
              </span>
            </button>

            {/* RENT */}
            <button
              onClick={() => navigate("Rent")}
              className="group relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-br from-[#3b0b15] via-[#1b0b10] to-[#101014] p-8 text-left shadow-[0_15px_50px_rgba(229,9,47,0.08)] transition duration-500 hover:-translate-y-3 hover:border-red-400 hover:shadow-[0_20px_60px_rgba(229,9,47,0.2)]"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/20 blur-[70px] transition duration-700 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-red-800 text-white shadow-lg shadow-red-900/40 transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <KeyRound size={32} />
                </div>

                <span className="text-xs font-bold tracking-[3px] text-white/30">
                  03
                </span>
              </div>

              <p className="relative mt-8 text-[10px] font-black tracking-[3px] text-red-300">
                YOUR JOURNEY, YOUR WAY
              </p>

              <h3 className="relative mt-3 text-2xl font-black">
                Rent Vehicles
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-gray-300">
                Find a vehicle for your next trip, daily commute or weekend
                adventure.
              </p>

              <span className="relative mt-8 flex items-center gap-3 text-sm font-bold text-red-400">
                Explore Rentals
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-2"
                />
              </span>
            </button>
          </div>
        </section>

        {/* =====================================
            FEATURED COLLECTION
        ===================================== */}

        <section className="relative overflow-hidden border-y border-white/5 bg-[#0c0c0f]/70 py-24">
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-red-800/10 blur-[130px]" />

          <div className="relative mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-3 text-xs font-black tracking-[4px] text-red-500">
                  <Sparkles size={17} />
                  THE COLLECTION
                </p>

                <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                  FIND YOUR
                  <span className="text-gradient"> STYLE.</span>
                </h2>

                <p className="mt-5 text-sm text-gray-400">
                  From luxury automobiles to powerful motorcycles.
                </p>
              </div>

              <button
                onClick={() => navigate("Buy")}
                className="group flex items-center gap-3 text-sm font-bold text-red-500 transition hover:text-red-400"
              >
                View All Vehicles
                <MoveUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {categories.map((item) => (
                <button
                  key={item.title}
                  onClick={() => navigate("Buy")}
                  className="group vehicle-card text-left"
                >
                  <div className="relative h-[260px] overflow-hidden sm:h-[310px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-110 group-hover:saturate-125"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold tracking-[2px] text-white backdrop-blur-md">
                      CARBYKE COLLECTION
                    </span>

                    <span className="absolute bottom-5 left-6 text-5xl font-black text-white/20">
                      {item.number}
                    </span>

                    <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-red-500 group-hover:bg-red-600">
                      <ArrowUpRight size={21} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            WHY CARBYKE
        ===================================== */}

        <section className="relative overflow-hidden px-5 py-24 sm:px-10 lg:px-16">
          <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-red-900/10 blur-[150px]" />

          <div className="relative mx-auto max-w-[1500px]">
            <div className="text-center">
              <p className="text-xs font-black tracking-[4px] text-red-500">
                BUILT AROUND YOUR JOURNEY
              </p>

              <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                MORE THAN JUST
                <span className="text-gradient"> A RIDE.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-400">
                Buying, selling and renting — everything comes together in one
                vehicle marketplace.
              </p>
            </div>

            <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group text-center transition duration-500 hover:-translate-y-3"
                  >
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/15 to-transparent text-red-500 shadow-[0_10px_40px_rgba(229,9,47,0.06)] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_35px_rgba(229,9,47,0.3)]">
                      <Icon size={32} />
                    </div>

                    <p className="mt-6 text-[10px] font-black tracking-[3px] text-red-500/60">
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 text-lg font-black">{item.title}</h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================
            FINAL CALL TO ACTION
        ===================================== */}

        <section className="px-5 pb-28 sm:px-10 lg:px-16">
          <div className="glass-panel relative mx-auto max-w-[1350px] overflow-hidden rounded-[30px] border-red-500/30 bg-gradient-to-r from-[#350813] via-[#1a0a10] to-[#090909] px-6 py-20 text-center sm:px-14 sm:py-24">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-red-600/20 blur-[110px]" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-red-600/15 blur-[110px]" />

            <div className="relative">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-red-500/40 bg-red-500/10 text-xl font-black text-red-400 shadow-[0_0_30px_rgba(229,9,47,0.2)]">
                CB
              </div>

              <p className="mt-7 text-xs font-black tracking-[5px] text-red-400">
                THIS IS YOUR MOMENT
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight sm:text-6xl">
                THE ROAD IS YOURS.
                <span className="mt-3 block text-gradient">
                  MAKE IT COUNT.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-300">
                Explore cars and bikes, list your vehicle or discover rental
                options with CARBYKE.
              </p>

              <button
                onClick={() => navigate("Buy")}
                className="group mt-10 inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-10 py-5 text-sm font-black text-white shadow-[0_10px_40px_rgba(229,9,47,0.2)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(229,9,47,0.4)]"
              >
                Explore CARBYKE
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-2"
                />
              </button>

              <p className="mt-9 text-[10px] font-bold tracking-[4px] text-white/30">
                CARBYKE — DRIVE YOUR NEXT MOVE.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default HomePage;