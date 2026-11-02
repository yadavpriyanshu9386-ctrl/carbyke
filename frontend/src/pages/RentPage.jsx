import ListRent from "./ListRent.jsx";
import { useMemo, useState, useEffect } from "react";
import { money } from "../utils/format.js";
import VideoBackground from "../components/Background/VideoBackground";
import homeVideo from "../components/Background/Home.bg.mp4";

function RentPage({ days = "Daily", setDays, vehicles = [] }) {
  const [kind, setKind] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [city, setCity] = useState("All");
  const [maxBudget, setMaxBudget] = useState("");
  const [minYear, setMinYear] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [showListRent, setShowListRent] = useState(false);

  const itemsPerPage = 6;
  const selectedPeriod = days || "Daily";

  // Rental price: use owner-provided price when available.
  // Fallback prices are demo estimates until rental data is connected.
  const getRentalPrice = (vehicle, period) => {
    const isBike = String(vehicle.type || "").toLowerCase() === "bike";

    const fallback = {
      Daily: isBike ? 700 : 2200,
      Weekly: isBike ? 4200 : 13000,
      Monthly: isBike ? 12000 : 38000,
    };

    const priceFields = {
      Daily: ["dailyPrice", "rentDaily"],
      Weekly: ["weeklyPrice", "rentWeekly"],
      Monthly: ["monthlyPrice", "rentMonthly"],
    };

    for (const field of priceFields[period] || []) {
      if (Number(vehicle[field]) > 0) return Number(vehicle[field]);
    }

    return fallback[period] || fallback.Daily;
  };

  const getBrand = (vehicle) =>
    vehicle.brand || vehicle.company || vehicle.name?.split(" ")[0] || "Other";

  const brands = useMemo(
    () => [...new Set(vehicles.map(getBrand))].sort(),
    [vehicles],
  );

  const cities = useMemo(
    () => [...new Set(vehicles.map((v) => v.city).filter(Boolean))].sort(),
    [vehicles],
  );

  const filteredVehicles = useMemo(() => {
    let result = vehicles.filter((v) => {
      const vehicleType = String(v.type || "").toLowerCase();
      const matchesType = kind === "All" || vehicleType === kind.toLowerCase();

      const matchesBrand = brand === "All" || getBrand(v) === brand;

      const matchesFuel =
        fuel === "All" ||
        String(v.fuel || "").toLowerCase() === fuel.toLowerCase();

      const matchesTransmission =
        transmission === "All" ||
        String(v.transmission || "").toLowerCase() ===
          transmission.toLowerCase();

      const matchesCity = city === "All" || v.city === city;

      const matchesSearch =
        !search ||
        `${v.name || ""} ${v.brand || ""} ${v.model || ""} ${v.city || ""}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const price = getRentalPrice(v, selectedPeriod);
      const matchesBudget = !maxBudget || price <= Number(maxBudget);

      const matchesYear = !minYear || Number(v.year || 0) >= Number(minYear);

      return (
        matchesType &&
        matchesBrand &&
        matchesFuel &&
        matchesTransmission &&
        matchesCity &&
        matchesSearch &&
        matchesBudget &&
        matchesYear
      );
    });

    if (sortBy === "low") {
      result.sort(
        (a, b) =>
          getRentalPrice(a, selectedPeriod) - getRentalPrice(b, selectedPeriod),
      );
    } else if (sortBy === "high") {
      result.sort(
        (a, b) =>
          getRentalPrice(b, selectedPeriod) - getRentalPrice(a, selectedPeriod),
      );
    } else if (sortBy === "newest") {
      result.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
    }

    return result;
  }, [
    vehicles,
    kind,
    brand,
    fuel,
    transmission,
    city,
    search,
    maxBudget,
    minYear,
    selectedPeriod,
    sortBy,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVehicles.length / itemsPerPage),
  );

  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [
    kind,
    brand,
    fuel,
    transmission,
    city,
    search,
    maxBudget,
    minYear,
    selectedPeriod,
    sortBy,
  ]);

  const resetFilters = () => {
    setKind("All");
    setBrand("All");
    setFuel("All");
    setTransmission("All");
    setCity("All");
    setMaxBudget("");
    setMinYear("");
    setSearch("");
    setSortBy("recommended");
  };

  const handleListVehicle = () => {
    setShowListRent(true);
  };
  if (showListRent) {
    return <ListRent onBack={() => setShowListRent(false)} />;
  }

  return (
    <main className="rent-page relative isolate min-h-screen overflow-x-hidden bg-[#08080b] text-white">
      {/* SAME HOME PAGE VIDEO BACKGROUND */}
      <VideoBackground src={homeVideo} />

      <div className="relative z-10">
        <style>{`
          @keyframes rentGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes rentFadeUp {
            from { opacity: 0; transform: translateY(22px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes rentGlow {
            0%, 100% { box-shadow: 0 0 12px rgba(220,38,38,.15); }
            50% { box-shadow: 0 0 28px rgba(220,38,38,.4); }
          }

          .rent-gradient-text {
            background: linear-gradient(90deg, #fff, #fb7185, #dc2626, #fff);
            background-size: 250% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: rentGradient 5s ease infinite;
          }

          .rent-fade-up {
            animation: rentFadeUp .7s ease both;
          }

          .rent-glow {
            animation: rentGlow 3s ease-in-out infinite;
          }

          .rent-card {
            transition: transform .35s ease, border-color .35s ease,
              box-shadow .35s ease;
          }

          .rent-card:hover {
            transform: translateY(-7px);
            border-color: rgba(239,68,68,.65);
            box-shadow: 0 18px 45px rgba(127,29,29,.18);
          }

          .rent-filter-input {
            width: 100%;
            border: 1px solid rgba(255,255,255,.1);
            border-radius: 10px;
            background: #111116;
            padding: 11px 12px;
            color: white;
            outline: none;
            transition: border-color .25s ease, box-shadow .25s ease;
          }

          .rent-filter-input:focus {
            border-color: #dc2626;
            box-shadow: 0 0 0 3px rgba(220,38,38,.12);
          }

          .rent-filter-input option {
            background: #111116;
            color: white;
          }

          .rent-period-btn {
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.04);
            color: #aaa;
            transition: all .25s ease;
          }

          .rent-period-btn:hover,
          .rent-period-btn.active {
            border-color: #dc2626;
            background: rgba(220,38,38,.15);
            color: white;
            box-shadow: 0 0 16px rgba(220,38,38,.12);
          }

          @media (prefers-reduced-motion: reduce) {
            .rent-gradient-text,
            .rent-fade-up,
            .rent-glow {
              animation: none !important;
            }
          }
        `}</style>

        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden border-b border-white/5 bg-black/25">
          {/* VIDEO OVERLAYS */}
          <div className="pointer-events-none absolute inset-0 -z-10 " />

          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#08080b]/80 via-[#08080b]/35 to-transparent" />

          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#08080b]/90 via-transparent to-black/20" />

          {/* RED GLOW */}
          <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-red-700/25 blur-[110px]" />

          <div className="mx-auto max-w-[1400px] px-5 py-14 md:py-20 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_.8fr]">
              <div className="rent-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-red-300">
                  <span className="h-2 w-2 rounded-full bg-red-500 rent-glow" />
                  CARBYKE Rental Marketplace
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="rent-gradient-text">Your next TRIP,</span>
                  <br />
                  <span className="rent-gradient-text">Your way.</span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Find the right car or bike for your next journey, or turn your
                  own vehicle into an earning opportunity with CARBYKE.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#rent-listings"
                    className="rent-glow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-6 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:from-red-600 hover:to-red-400"
                  >
                    Explore Vehicles <span className="ml-2">→</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleListVehicle}
                    className="group inline-flex items-center justify-center rounded-xl border border-red-500/60 bg-white/[.04] px-6 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-600/15 hover:shadow-[0_0_28px_rgba(220,38,38,.25)]"
                  >
                    <span className="mr-2 text-lg text-red-400 transition group-hover:scale-125">
                      +
                    </span>
                    List Your Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTINGS SECTION */}
        <section
          id="rent-listings"
          className="mx-auto max-w-[1400px] bg-gradient-to-b from-[#08080b]/35 via-[#08080b]/70 to-[#08080b]/90 px-5 py-12 lg:px-8"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[.25em] text-red-400">
                Discover your ride
              </span>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Vehicles for <span className="rent-gradient-text">Rent</span>
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Explore available cars and bikes for your next journey.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rent-filter-input min-w-[165px] text-xs"
              >
                <option value="recommended">Recommended</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="newest">Newest Vehicles</option>
              </select>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#111116]/90 p-3 backdrop-blur-xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <span className="text-lg text-red-400">⌕</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by vehicle, brand, model or city..."
                className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Daily", "Weekly", "Monthly"].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setDays?.(period)}
                  className={`rent-period-btn rounded-xl px-4 py-2.5 text-xs font-bold ${
                    selectedPeriod === period ? "active" : ""
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* VEHICLE TYPE */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {["All", "Car", "Bike"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setKind(type)}
                className={`rounded-full border px-5 py-2 text-xs font-bold transition duration-300 ${
                  kind === type
                    ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/40"
                    : "border-white/10 bg-white/[.03] text-slate-300 hover:border-red-500/50 hover:text-white"
                }`}
              >
                {type === "All"
                  ? "All Vehicles"
                  : type === "Car"
                    ? "🚘 Cars"
                    : "🏍️ Bikes"}
              </button>
            ))}
          </div>

          {/* FILTER BUTTON */}
          <div className="mt-7 flex justify-start">
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              className={`group flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-extrabold transition duration-300 ${
                showFilters
                  ? "border-red-500 bg-red-600/15 text-white"
                  : "border-white/10 bg-[#111116]/90 text-slate-300 hover:border-red-500/60 hover:text-white"
              }`}
            >
              <span className="text-lg text-red-400 transition group-hover:rotate-12">
                ☷
              </span>
              {showFilters ? "Hide Filters" : "Filters"}
              <span className="rounded-md bg-red-600 px-2 py-0.5 text-[10px] text-white">
                {
                  [
                    brand !== "All",
                    fuel !== "All",
                    transmission !== "All",
                    city !== "All",
                    Boolean(maxBudget),
                    Boolean(minYear),
                  ].filter(Boolean).length
                }
              </span>
              <span className="text-xs text-red-400">
                {showFilters ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* FILTER PANEL */}
          {showFilters && (
            <div className="rent-fade-up mt-4 rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#171116]/95 to-[#101014]/95 p-5 shadow-2xl shadow-red-950/10 backdrop-blur-xl">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-extrabold text-white">
                    Advanced Filters
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Find a vehicle that matches your requirements.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-red-400 transition hover:text-red-300"
                >
                  Reset All
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <label className="text-xs font-semibold text-slate-400">
                  Brand / Company
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="rent-filter-input mt-2"
                  >
                    <option value="All">All Brands</option>
                    {brands.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-xs font-semibold text-slate-400">
                  Fuel Type
                  <select
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
                    className="rent-filter-input mt-2"
                  >
                    <option value="All">All Fuel</option>
                    {["Petrol", "Diesel", "Electric", "CNG", "Hybrid"].map(
                      (item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ),
                    )}
                  </select>
                </label>

                <label className="text-xs font-semibold text-slate-400">
                  Transmission
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="rent-filter-input mt-2"
                  >
                    <option value="All">All Transmissions</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </label>

                <label className="text-xs font-semibold text-slate-400">
                  Location
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="rent-filter-input mt-2"
                  >
                    <option value="All">All Locations</option>
                    {cities.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-xs font-semibold text-slate-400">
                  Maximum {selectedPeriod} Budget (₹)
                  <input
                    type="number"
                    min="0"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    placeholder="Enter budget"
                    className="rent-filter-input mt-2"
                  />
                </label>

                <label className="text-xs font-semibold text-slate-400">
                  Minimum Year
                  <input
                    type="number"
                    min="1990"
                    max="2030"
                    value={minYear}
                    onChange={(e) => setMinYear(e.target.value)}
                    placeholder="e.g. 2020"
                    className="rent-filter-input mt-2"
                  />
                </label>
              </div>
            </div>
          )}

          {/* RESULTS COUNT */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-slate-300">
              Showing{" "}
              <span className="font-bold text-white">
                {filteredVehicles.length}
              </span>{" "}
              vehicles
            </p>
            <p className="text-xs text-slate-400">
              Rental prices shown per {selectedPeriod.toLowerCase()}
            </p>
          </div>

          {/* VEHICLE CARDS */}
          {paginatedVehicles.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedVehicles.map((v) => {
                const price = getRentalPrice(v, selectedPeriod);
                const image = v.img || v.image || "";
                const vehicleName =
                  v.name || `${v.brand || ""} ${v.model || ""}`.trim();

                return (
                  <article
                    key={v.id}
                    className="rent-card overflow-hidden rounded-2xl border border-white/10 bg-[#111116]/95 backdrop-blur-xl"
                  >
                    <div className="group relative h-52 overflow-hidden bg-[#1b1b21]">
                      {image ? (
                        <img
                          src={image}
                          alt={vehicleName}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-5xl">
                          {String(v.type).toLowerCase() === "bike"
                            ? "🏍️"
                            : "🚘"}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                        {v.type || "Vehicle"}
                      </span>

                      <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                        📍 {v.city || "Location not specified"}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-red-400">
                            {getBrand(v)}
                          </p>
                          <h3 className="mt-1 text-lg font-extrabold text-white transition-colors duration-300 hover:text-red-400">
                            {vehicleName || "Vehicle"}
                          </h3>
                          <p className="mt-1 text-xs text-slate-400">
                            {v.model || vehicleName}
                            {v.year ? ` · ${v.year}` : ""}
                          </p>
                        </div>

                        <span className="rounded-lg border border-white/10 bg-white/[.04] px-2 py-1 text-[10px] font-bold text-slate-400">
                          {v.year || "Year N/A"}
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 border-y border-white/[.07] py-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            Fuel
                          </p>
                          <p className="mt-1 text-xs font-bold text-slate-300">
                            {v.fuel || "Not specified"}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            Transmission
                          </p>
                          <p className="mt-1 text-xs font-bold text-slate-300">
                            {v.transmission || "Not specified"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">
                          Rental pricing
                        </p>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {["Daily", "Weekly", "Monthly"].map((period) => (
                            <button
                              type="button"
                              key={period}
                              onClick={() => setDays?.(period)}
                              className={`rounded-xl border p-2 text-center transition duration-300 ${
                                selectedPeriod === period
                                  ? "border-red-500 bg-red-600/15"
                                  : "border-white/[.07] bg-black/20 hover:border-red-500/40"
                              }`}
                            >
                              <p className="text-[9px] font-bold uppercase text-slate-400">
                                {period}
                              </p>
                              <p
                                className={`mt-1 text-xs font-extrabold ${
                                  selectedPeriod === period
                                    ? "text-red-400"
                                    : "text-white"
                                }`}
                              >
                                {money(getRentalPrice(v, period))}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] text-slate-400">
                            Selected rental price
                          </p>
                          <p className="mt-1 text-xl font-black text-red-400">
                            {money(price)}
                            <span className="ml-1 text-[10px] font-medium text-slate-400">
                              / {selectedPeriod.toLowerCase()}
                            </span>
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            alert(
                              v.ownerContact
                                ? `Owner Contact: ${v.ownerContact}`
                                : "Owner contact and booking enquiry will be connected with the rental backend.",
                            )
                          }
                          className="rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-4 py-3 text-xs font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-950/40"
                        >
                          Enquire Now →
                        </button>
                      </div>

                      {v.ownerContact && (
                        <p className="mt-3 text-[10px] text-slate-400">
                          Owner contact: {v.ownerContact}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/[.02] px-5 py-16 text-center">
              <div className="text-4xl">🚘</div>
              <h3 className="mt-4 text-xl font-extrabold text-white">
                No vehicles found
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Try changing your search or filter options.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-red-500"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* PAGINATION */}
          {filteredVehicles.length > itemsPerPage && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-10 min-w-10 rounded-lg border px-3 text-xs font-extrabold transition duration-300 ${
                      currentPage === page
                        ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/40"
                        : "border-white/10 bg-white/[.03] text-slate-300 hover:border-red-500/60 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          )}

          {/* DEMO PRICE NOTE */}
          <p className="mt-8 text-center text-[10px] leading-5 text-slate-400">
            Note: If a vehicle does not have owner-provided rental prices,
            sample demo prices are displayed. Real bookings, availability and
            owner verification require backend integration.
          </p>
        </section>
      </div>
    </main>
  );
}

export default RentPage;
