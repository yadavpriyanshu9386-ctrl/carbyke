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
} from "lucide-react";
import { money } from "../utils/format.js";
import { vehicles } from "../data/vehicles.js";
import VehicleCard from "../components/vehicles/VehicleCard.jsx";

function BuyPage({
  page, type, setType, search, setSearch, brand, setBrand, fuel, setFuel, maxPrice, setMaxPrice,
  sort, setSort, view, setView, showFilters, setShowFilters, filtered, wishlist, toggleWish,
  setSelected, setToast, navigate,
}) {
  return (
    <>
      <section className="hero relative overflow-hidden border-b border-line">
        <div className="hero-glow"></div>
        <div className="relative mx-auto grid min-h-[250px] max-w-[1500px] items-center px-5 py-8 md:min-h-[280px] md:grid-cols-[.95fr_1.05fr] md:px-8">
          <div className="relative z-10">
            <span className="inline-flex rounded-md bg-red px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide shadow-redglow">
              Pre-owned vehicles
            </span>
            <h1 className="mt-3 max-w-xl text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              Find Your <span className="text-red">Perfect Ride</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm text-slate-300">
              Explore quality second-hand cars and bikes at the right price.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Trusted sellers <span className="mx-2 text-red">•</span>{" "}
              Verified listings <span className="mx-2 text-red">•</span>{" "}
              Best deals
            </p>
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setType("Car")}
                className={`type-btn ${type === "Car" ? "chosen" : ""}`}
              >
                <CarFront size={16} /> Cars
              </button>
              <button
                onClick={() => setType("Bike")}
                className={`type-btn ${type === "Bike" ? "chosen" : ""}`}
              >
                <Bike size={16} /> Bikes
              </button>
              <button
                onClick={() => setType("All")}
                className={`type-btn ${type === "All" ? "chosen" : ""}`}
              >
                All
              </button>
            </div>
          </div>
          <div className="hero-vehicle hidden md:block" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b11] via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 mt-5 flex max-w-3xl flex-col gap-2 rounded-xl border border-slate-600 bg-[#07111b]/95 p-2 shadow-2xl sm:flex-row md:absolute md:bottom-[-24px] md:left-8 md:right-[30%] md:mt-0">
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search size={18} className="shrink-0 text-slate-300" />
              <input
                id="vehicle-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search brand, model or keyword..."
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-2 border-t border-line px-3 py-2 sm:border-l sm:border-t-0">
              <MapPin size={17} className="text-slate-300" />
              <select
                className="w-full bg-transparent text-sm outline-none sm:w-32"
                aria-label="Location"
              >
                <option>Delhi NCR</option>
                <option>Gurugram</option>
                <option>Noida</option>
                <option>Faridabad</option>
              </select>
            </div>
            <button
              className="rounded-lg bg-red px-7 py-3 text-sm font-bold shadow-redglow transition hover:bg-rose-600"
              onClick={() =>
                document
                  .getElementById("listing-grid")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1500px] gap-4 px-4 pb-14 pt-6 md:grid-cols-[245px_1fr] lg:px-8 lg:pt-8">
        <aside
          className={`${showFilters ? "block" : "hidden"} h-fit rounded-xl border border-line bg-panel p-4 md:block`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
            <h2 className="flex items-center gap-2 font-bold">
              <SlidersHorizontal size={18} className="text-red" /> Filters
            </h2>
            <button
              className="text-xs text-red hover:underline"
              onClick={() => {
                setBrand("All brands");
                setFuel("All fuels");
                setMaxPrice(15000000);
                setSearch("");
                setType("All");
              }}
            >
              Reset All
            </button>
          </div>
          <label className="filter-label">Price Range (₹)</label>
          <input
            type="range"
            min="50000"
            max="15000000"
            step="50000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
            className="mt-3 w-full accent-red"
          />
          <div className="mt-1 flex justify-between text-[10px] text-slate-300">
            <span>₹50,000</span>
            <span>{money(maxPrice)} max</span>
          </div>
          <label className="filter-label mt-5">Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="field"
          >
            <option>All brands</option>
            {[...new Set(vehicles.map((v) => v.brand))].sort().map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <label className="filter-label mt-4">Fuel Type</label>
          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="field"
          >
            <option>All fuels</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
          </select>
          <label className="filter-label mt-4">Vehicle type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="field"
          >
            <option value="All">Cars & Bikes</option>
            <option>Car</option>
            <option>Bike</option>
          </select>
          <label className="filter-label mt-4">Year</label>
          <div className="grid grid-cols-2 gap-2">
            <select className="field">
              <option>Min Year</option>
              {[2018, 2019, 2020, 2021, 2022, 2023].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <select className="field">
              <option>Max Year</option>
              {[2019, 2020, 2021, 2022, 2023, 2024].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
          <label className="filter-label mt-4">Transmission</label>
          <select className="field">
            <option>Any transmission</option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>
          <label className="filter-label mt-4">Ownership</label>
          <select className="field">
            <option>Any owner</option>
            <option>1st Owner</option>
            <option>2nd Owner</option>
          </select>
          <label className="filter-label mt-4">Location</label>
          <select className="field">
            <option>Delhi NCR</option>
            <option>Gurugram</option>
            <option>Noida</option>
            <option>Faridabad</option>
          </select>
          <button
            className="mt-5 w-full rounded-lg bg-red py-3 text-sm font-bold hover:bg-rose-600"
            onClick={() => setShowFilters(false)}
          >
            Apply Filters
          </button>
        </aside>
        <section id="listing-grid" className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-panel px-4 py-3">
            <div>
              <p className="text-sm font-medium">
                {page === "Wishlist"
                  ? "Your Wishlist"
                  : `Showing ${filtered.length} vehicle${filtered.length === 1 ? "" : "s"}`}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                {page === "Wishlist"
                  ? "Saved vehicles for you"
                  : "Find a ride that fits your lifestyle"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="rounded-lg border border-line p-2 text-slate-300 md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={16} />
              </button>
              <label className="hidden text-xs text-slate-300 sm:block">
                Sort by:
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="field mt-0 w-40"
              >
                <option>Latest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Lowest KM</option>
              </select>
              <button
                onClick={() => setView("grid")}
                className={`icon-btn ${view === "grid" ? "text-red" : ""}`}
              >
                <LayoutGrid size={17} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`icon-btn ${view === "list" ? "text-red" : ""}`}
              >
                <List size={17} />
              </button>
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-line bg-panel py-20 text-center">
              <Heart className="mx-auto text-red" size={36} />
              <h3 className="mt-3 text-lg font-bold">Nothing here yet</h3>
              <p className="mt-1 text-sm text-slate-400">
                Try adjusting your filters or save a vehicle to your
                wishlist.
              </p>
              <button
                className="mt-4 rounded-lg bg-red px-5 py-2 text-sm font-bold"
                onClick={() => navigate("Buy")}
              >
                Browse vehicles
              </button>
            </div>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                  : "grid gap-3"
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
          {filtered.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
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
      </main>
    </>
  );
}

export default BuyPage;
