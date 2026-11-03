import { useState } from "react";

import {
  Bike,
  CarFront,
  ChevronRight,
  Heart,
  LayoutGrid,
  List,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
  ArrowUpRight,
  Fuel,
  RotateCcw,
} from "lucide-react";

import { money } from "../utils/format.js";
import { vehicles } from "../data/vehicles.js";
import VehicleCard from "../components/vehicles/VehicleCard.jsx";
import VideoBackground from "../components/Background/VideoBackground";
import homeVideo from "../components/Background/Home.bg.mp4";

function BuyPage({
  page,
  type,
  setType,
  search,
  setSearch,
  brand,
  setBrand,
  fuel,
  setFuel,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
  view,
  setView,
  showFilters,
  setShowFilters,
  filtered,
  wishlist,
  toggleWish,
  setSelected,
  setToast,
  navigate,
}) {
  const [selectedLocation, setSelectedLocation] = useState("Delhi NCR");
  const [locationOpen, setLocationOpen] = useState(false);

  const locations = [
    "Delhi NCR",
    "Gurugram",
    "Noida",
    "Faridabad",
    "New Delhi",
    "All Locations",
  ];

  const resetFilters = () => {
    setBrand("All brands");
    setFuel("All fuels");
    setMaxPrice(15000000);
    setSearch("");
    setType("All");
    setSort("Latest First");
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <VideoBackground src={homeVideo} />

      <div className="relative z-10">
        <style>{`
          @keyframes buyHeroZoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.045); }
          }

          @keyframes buyGlow {
            0%, 100% { opacity: .3; }
            50% { opacity: .65; }
          }

          @keyframes buyReveal {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes textGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes textUp {
            from {
              opacity: 0;
              transform: translateY(30px);
              filter: blur(7px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes badgeGlow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(229,9,47,.08);
              border-color: rgba(229,9,47,.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(229,9,47,.28);
              border-color: rgba(229,9,47,.8);
            }
          }

          @keyframes carbykeFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes carbykeCardReveal {
            from {
              opacity: 0;
              transform: translateX(45px) translateY(15px);
              filter: blur(7px);
            }
            to {
              opacity: 1;
              transform: translateX(0) translateY(0);
              filter: blur(0);
            }
          }

          @keyframes locationReveal {
            from {
              opacity: 0;
              transform: translateY(12px) scale(.97);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .buy-glow {
            animation: buyGlow 5s ease-in-out infinite;
          }

          .buy-reveal {
            animation: buyReveal .8s ease both;
          }

          .animated-badge {
            animation:
              textUp .8s ease both,
              badgeGlow 4s ease-in-out infinite;
          }

          .animated-heading-wrap {
            animation: textUp 1s ease both;
            animation-delay: .15s;
          }

          .animated-heading {
            background: linear-gradient(
              90deg,
              #ffffff,
              #ff7185,
              #e5092f,
              #ffffff
            );
            background-size: 300% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: textGradient 6s ease infinite;
          }

          .animated-ride {
            background: linear-gradient(
              90deg,
              #ffb2bd,
              #e5092f,
              #ffffff,
              #e5092f
            );
            background-size: 300% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: textGradient 4s ease infinite;
          }

          .animated-subtitle {
            animation: textUp 1s ease both;
            animation-delay: .4s;
          }

          .animated-points {
            animation: textUp 1s ease both;
            animation-delay: .6s;
          }

          .animated-types {
            animation: textUp 1s ease both;
            animation-delay: .8s;
          }

          .buy-search:focus-within {
            border-color: #e5092f;
            box-shadow: 0 0 0 3px rgba(229,9,47,.12);
          }

          .buy-field {
            width: 100%;
            border: 1px solid #34343c;
            border-radius: 10px;
            background: #17171c;
            color: #f4f4f5;
            padding: 11px 12px;
            outline: none;
            transition: all .25s ease;
            color-scheme: dark;
          }

          .buy-field:focus {
            border-color: #e5092f;
            box-shadow: 0 0 0 3px rgba(229,9,47,.12);
          }

          .buy-field option {
            background: #17171c;
            color: white;
          }

          .buy-filter-panel {
            animation: buyReveal .4s ease both;
          }

          .buy-type-btn {
            transition: all .3s ease;
          }

          .buy-type-btn:hover {
            transform: translateY(-3px);
          }

          .carbyke-info-card {
            position: relative;
            overflow: hidden;
            isolation: isolate;
            border: 1px solid rgba(229,9,47,.38);
            background:
              radial-gradient(
                circle at top right,
                rgba(229,9,47,.35),
                transparent 55%
              ),
              linear-gradient(
                145deg,
                rgba(12,12,16,.98),
                rgba(75,10,25,.94)
              );
            box-shadow: 0 20px 65px rgba(0,0,0,.5);
            opacity: 0;
            animation:
              carbykeCardReveal 1.2s cubic-bezier(.22,1,.36,1) .7s forwards,
              carbykeFloat 6s ease-in-out 2s infinite;
            transition:
              border-color .5s ease,
              box-shadow .5s ease;
          }

          .carbyke-info-card:hover {
            border-color: rgba(255,80,110,.85);
            box-shadow: 0 25px 70px rgba(180,10,45,.2);
          }

          .carbyke-info-card::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,.045) 50%,
              transparent 80%
            );
            transform: translateX(-100%);
            transition: transform 1s ease;
          }

          .carbyke-info-card:hover::before {
            transform: translateX(100%);
          }

          .carbyke-info-text {
            opacity: 0;
            animation: textUp .9s ease forwards;
          }

          .carbyke-info-text:nth-child(1) { animation-delay: 1s; }
          .carbyke-info-text:nth-child(2) { animation-delay: 1.2s; }
          .carbyke-info-text:nth-child(3) { animation-delay: 1.4s; }
          .carbyke-info-text:nth-child(4) { animation-delay: 1.6s; }

          .location-dropdown {
            transform-origin: top center;
            animation: locationReveal .4s cubic-bezier(.22,1,.36,1) both;
          }

          .location-option {
            transition:
              background .3s ease,
              color .3s ease,
              transform .3s ease;
          }

          .location-option:hover {
            transform: translateX(4px);
          }

          .buy-toolbar {
            animation: buyReveal .6s ease both;
          }

          @media (prefers-reduced-motion: reduce) {
            .buy-glow,
            .buy-reveal,
            .animated-badge,
            .animated-heading-wrap,
            .animated-heading,
            .animated-ride,
            .animated-subtitle,
            .animated-points,
            .animated-types,
            .carbyke-info-card,
            .carbyke-info-text,
            .location-dropdown,
            .buy-toolbar {
              animation: none !important;
              opacity: 1;
              filter: none;
            }

            .carbyke-info-card,
            .buy-type-btn,
            .location-option {
              transition: none !important;
            }
          }
        `}</style>

        {/* HERO SECTION */}
        <section className="relative isolate overflow-visible border-b border-white/10 bg-transparent">
          <div className="pointer-events-none absolute inset-0 -z-10" />

          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#08080b]/95 via-[#08080b]/75 to-[#08080b]/35" />

          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#08080b]/90 via-transparent to-black/25" />

          <div className="buy-glow pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-red-700/25 blur-[110px]" />

          <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
              {/* LEFT HERO CONTENT */}
              <div className="relative z-10">
                <span className="animated-badge inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-400 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  CARBYKE Marketplace
                </span>

                <div className="animated-heading-wrap">
                  <h1 className="animated-heading mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                    FIND YOUR
                    <br />
                    NEXT <span className="animated-ride">RIDE.</span>
                  </h1>
                </div>

                <p className="animated-subtitle mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                  Explore premium pre-owned cars and bikes. Discover your next
                  ride at the right price with CARBYKE.
                </p>

                <div className="animated-points mt-5 flex flex-wrap gap-3 text-xs text-gray-300">
                  <span>✓ Quality Listings</span>
                  <span className="text-red-500">•</span>
                  <span>✓ Trusted Sellers</span>
                  <span className="text-red-500">•</span>
                  <span>✓ Better Deals</span>
                </div>

                {/* VEHICLE TYPE BUTTONS */}
                <div className="animated-types mt-8 flex flex-wrap gap-3">
                  {[
                    { name: "All", icon: LayoutGrid },
                    { name: "Car", icon: CarFront },
                    { name: "Bike", icon: Bike },
                  ].map((item) => {
                    const Icon = item.icon;
                    const active = type === item.name;

                    return (
                      <button
                        key={item.name}
                        onClick={() => setType(item.name)}
                        className={`buy-type-btn flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold backdrop-blur-md ${
                          active
                            ? "border-red-500 bg-red-600/25 text-red-300 shadow-[0_0_22px_rgba(229,9,47,.2)]"
                            : "border-white/20 bg-black/40 text-gray-200 hover:border-red-500/60 hover:text-white"
                        }`}
                      >
                        <Icon size={19} />
                        {item.name === "All"
                          ? "All Vehicles"
                          : item.name === "Car"
                            ? "Cars"
                            : "Bikes"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT CARBYKE FLOATING CARD */}
              <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-red-700/15 blur-[75px]" />

                <div className="carbyke-info-card rounded-[28px] p-7 sm:p-9">
                  <div className="carbyke-info-text flex items-center justify-between">
                    <span className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-red-300">
                      Welcome to CARBYKE
                    </span>

                    <ArrowUpRight className="text-red-400" size={22} />
                  </div>

                  <div className="carbyke-info-text mt-8">
                    <p className="text-xs font-bold uppercase tracking-[.25em] text-red-400">
                      More Than Just A Ride
                    </p>

                    <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                      Your Journey.
                      <br />
                      <span className="text-red-500">Your Choice.</span>
                    </h2>
                  </div>

                  <p className="carbyke-info-text mt-5 text-sm leading-7 text-gray-300">
                    CARBYKE brings buyers and sellers together in one place.
                    Explore a wide range of cars and bikes, discover exciting
                    options and find a vehicle that matches your lifestyle.
                  </p>

                  <div className="carbyke-info-text mt-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/15 text-red-400">
                        <CarFront size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">
                          Explore Vehicles
                        </p>
                        <p className="text-xs text-gray-400">
                          Cars and bikes in one place
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/15 text-red-400">
                        <Heart size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">
                          Find Your Match
                        </p>
                        <p className="text-xs text-gray-400">
                          Discover a ride that fits you
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/15 text-red-400">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">
                          Discover Nearby
                        </p>
                        <p className="text-xs text-gray-400">
                          Explore vehicles by location
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carbyke-info-text mt-8 border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold tracking-wide text-gray-400">
                      FIND IT. LOVE IT. DRIVE IT.
                    </p>
                    <p className="mt-1 text-sm font-black tracking-widest text-white">
                      CARBYKE<span className="text-red-500">.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="buy-reveal relative z-[80] mt-12 overflow-visible rounded-2xl border border-white/10 bg-[#121216]/95 p-2 shadow-[0_15px_55px_rgba(0,0,0,.5)] backdrop-blur-2xl">
              <div className="relative z-[90] grid gap-2 md:grid-cols-[1fr_220px_auto]">
                {/* SEARCH INPUT */}
                <div className="buy-search flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-[#1b1b21] px-4 transition-all duration-300">
                  <Search size={20} className="shrink-0 text-red-500" />

                  <input
                    id="vehicle-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search brand, model or keyword..."
                    className="w-full min-w-0 bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-500"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="text-gray-400 transition hover:text-red-400"
                      aria-label="Clear search"
                    >
                      <X size={17} />
                    </button>
                  )}
                </div>

                {/* CUSTOM LOCATION DROPDOWN */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLocationOpen((prev) => !prev)}
                    aria-expanded={locationOpen}
                    aria-label="Select location"
                    className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-500 ${
                      locationOpen
                        ? "border-red-500 bg-[#1b1116] shadow-[0_0_25px_rgba(229,9,47,.18)]"
                        : "border-white/10 bg-[#1b1b21] hover:border-red-500/60"
                    }`}
                  >
                    <MapPin
                      size={19}
                      className="shrink-0 text-red-500 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-white">
                      {selectedLocation}
                    </span>

                    <ChevronRight
                      size={17}
                      className={`text-gray-400 transition-transform duration-300 ${
                        locationOpen ? "rotate-90 text-red-400" : ""
                      }`}
                    />
                  </button>

                  {locationOpen && (
                    <div className="location-dropdown absolute left-0 top-[calc(100%+10px)] z-[999] w-full min-w-[230px] overflow-hidden rounded-2xl border border-red-500/30 bg-[#0b0b0f] p-2 shadow-[0_20px_60px_rgba(0,0,0,.85)]">
                      <div className="border-b border-white/10 px-3 py-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-red-400">
                          Choose Your Location
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Find vehicles around your preferred city.
                        </p>
                      </div>

                      <div className="mt-2 grid gap-1">
                        {locations.map((location) => (
                          <button
                            key={location}
                            type="button"
                            onClick={() => {
                              setSelectedLocation(location);
                              setLocationOpen(false);
                            }}
                            className={`location-option flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm ${
                              selectedLocation === location
                                ? "bg-red-600/20 font-bold text-red-400"
                                : "text-gray-300 hover:bg-red-600/10 hover:text-white"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <MapPin size={15} className="text-red-500" />
                              {location}
                            </span>

                            {selectedLocation === location && (
                              <span className="text-red-400">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* SEARCH BUTTON */}
                <button
                  onClick={() =>
                    document.getElementById("listing-grid")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-sm font-extrabold text-white shadow-[0_5px_20px_rgba(229,9,47,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(229,9,47,.4)] active:scale-95"
                >
                  <Search size={18} />
                  Search Vehicles
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LISTINGS SECTION */}
        <div className="mx-auto max-w-[1500px] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          {/* FILTER BUTTON */}
          <div className="mb-4 flex justify-start">
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              aria-expanded={showFilters}
              aria-controls="buy-filter-panel"
              className={` group flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                showFilters
                  ? "border-red-500 bg-red-600/15 text-red-400 shadow-[0_0_20px_rgba(229,9,47,.12)]"
                  : "border-white/10 bg-[#151519] text-gray-200 hover:border-red-500/60 hover:text-red-400"
              }`}
            >
              <SlidersHorizontal
                size={18}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              Filters
              <span className="rounded-md bg-black/40 px-2 py-1 text-[10px]">
                {showFilters ? "OPEN" : "CLOSED"}
              </span>
            </button>
          </div>

          {/* FILTER PANEL + LISTINGS */}
          <div
            className={`grid items-start gap-5 ${
              showFilters ? "md:grid-cols-[260px_minmax(0,1fr)]" : "grid-cols-1"
            }`}
          >
            {showFilters && (
              <aside
                id="buy-filter-panel"
                className="buy-filter-panel h-fit rounded-2xl border border-white/10 bg-[#101014]/95 p-5 shadow-xl backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <h2 className="flex items-center gap-2 font-extrabold text-white">
                    <SlidersHorizontal size={18} className="text-red-500" />
                    Filters
                  </h2>

                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-400 transition hover:text-red-300"
                  >
                    <RotateCcw size={13} />
                    Reset All
                  </button>
                </div>

                {/* SORT OPTION MOVED INSIDE FILTERS */}
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Sort By
                </label>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="buy-field"
                >
                  <option>Latest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Lowest KM</option>
                </select>

                {/* PRICE */}
                <label className="mb-2 mt-6 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Price Range
                </label>

                <input
                  type="range"
                  min="50000"
                  max="15000000"
                  step="50000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(+e.target.value)}
                  className="mt-2 w-full cursor-pointer accent-red-600"
                />

                <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                  <span>₹50,000</span>
                  <span className="font-bold text-red-400">
                    {money(maxPrice)} max
                  </span>
                </div>

                {/* BRAND */}
                <label className="mb-2 mt-6 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Brand
                </label>

                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="buy-field"
                >
                  <option>All brands</option>
                  {[...new Set(vehicles.map((v) => v.brand))]
                    .sort()
                    .map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                </select>

                {/* FUEL */}
                <label className="mb-2 mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <Fuel size={14} className="text-red-500" />
                  Fuel Type
                </label>

                <select
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  className="buy-field"
                >
                  <option>All fuels</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>

                {/* VEHICLE TYPE */}
                <label className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Vehicle Type
                </label>

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="buy-field"
                >
                  <option value="All">Cars & Bikes</option>
                  <option value="Car">Cars</option>
                  <option value="Bike">Bikes</option>
                </select>

                {/* YEAR */}
                <label className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Year
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <select className="buy-field text-xs">
                    <option>Min Year</option>
                    {[2018, 2019, 2020, 2021, 2022, 2023].map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>

                  <select className="buy-field text-xs">
                    <option>Max Year</option>
                    {[2019, 2020, 2021, 2022, 2023, 2024].map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* TRANSMISSION */}
                <label className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Transmission
                </label>

                <select className="buy-field">
                  <option>Any transmission</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>

                {/* OWNERSHIP */}
                <label className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Ownership
                </label>

                <select className="buy-field">
                  <option>Any owner</option>
                  <option>1st Owner</option>
                  <option>2nd Owner</option>
                </select>

                {/* LOCATION FILTER */}
                <label className="mb-2 mt-5 block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Location
                </label>

                <select className="buy-field">
                  <option>Delhi NCR</option>
                  <option>Gurugram</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                  <option>New Delhi</option>
                </select>

                {/* APPLY FILTERS */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-600/30 active:scale-95"
                >
                  Apply Filters
                </button>
              </aside>
            )}

            {/* VEHICLE LISTINGS */}
            <section id="listing-grid" className="min-w-0 scroll-mt-28">
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-[#101014]/90 py-20 text-center backdrop-blur-xl">
                  <Heart className="mx-auto text-red-500" size={40} />

                  <h3 className="mt-4 text-xl font-extrabold text-white">
                    Nothing here yet
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-sm text-gray-400">
                    Try adjusting your filters or save a vehicle to your
                    wishlist.
                  </p>

                  <button
                    className="mt-5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/30"
                    onClick={() => navigate("Buy")}
                  >
                    Browse Vehicles
                  </button>
                </div>
              ) : (
                <div
                  className={
                    view === "grid"
                      ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                      : "grid gap-4"
                  }
                >
                  {filtered.map((v) => (
                    <VehicleCard
                      key={v.id}
                      v={v}
                      view={view}
                      wished={wishlist.includes(v.id)}
                      onWish={() => toggleWish(v.id)}
                      onSelect={setSelected}
                    />
                  ))}
                </div>
              )}

              {/* PAGINATION */}
              {filtered.length > 0 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button className="page-btn" disabled>
                    <ChevronRight className="rotate-180" size={16} />
                  </button>

                  <button className="page-btn current">1</button>

                  <button
                    className="page-btn"
                    onClick={() =>
                      setToast(
                        "Demo listing: all sample vehicles are shown on this page.",
                      )
                    }
                  >
                    2
                  </button>

                  <button
                    className="page-btn"
                    onClick={() =>
                      setToast(
                        "Demo listing: all sample vehicles are shown on this page.",
                      )
                    }
                  >
                    3
                  </button>

                  <button
                    className="page-btn"
                    onClick={() =>
                      setToast("You are viewing the demo inventory.")
                    }
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BuyPage;
