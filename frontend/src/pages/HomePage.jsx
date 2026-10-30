import { useState } from "react";
import {
  ArrowRight,
  Search,
  CarFront,
  Bike,
  KeyRound,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  CheckCircle2,
} from "lucide-react";

function HomePage({ navigate, setSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(query);
    navigate("Buy");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b11] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[590px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050b11] via-[#050b11]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b11] via-transparent to-[#050b11]/20" />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1400px] items-center px-5 py-20 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              YOUR JOURNEY STARTS HERE
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Find Your
              <br />
              Perfect
              <span className="text-red-500"> Ride.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Buy, sell or rent your favourite cars and bikes. Discover your
              next ride with CARBYKE – one destination for every journey.
            </p>

            {/* SEARCH BOX */}
            <form
              onSubmit={handleSearch}
              className="mt-9 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/10 bg-[#101923]/90 p-2 shadow-2xl backdrop-blur-xl sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search className="text-red-500" size={21} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search cars, bikes or brands..."
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-red-600 px-7 py-3 text-sm font-bold transition hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30"
              >
                Search Vehicles
              </button>
            </form>

            {/* HERO BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("Buy")}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-slate-200"
              >
                Explore Vehicles <ArrowRight size={17} />
              </button>

              <button
                onClick={() => navigate("Rent")}
                className="flex items-center gap-2 rounded-xl border border-red-500 bg-red-600/15 px-6 py-3 text-sm font-bold text-red-400 transition hover:-translate-y-1 hover:bg-red-600 hover:text-white"
              >
                Rent a Vehicle <KeyRound size={17} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-7 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-red-500" />
                Easy Process
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-500" />
                Trusted Marketplace
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-red-500" />
                Multiple Choices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BUY SELL RENT SECTION */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold tracking-[4px] text-red-500">
            WHAT ARE YOU LOOKING FOR?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Everything You Need,
            <span className="text-red-500"> One Place.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Choose your journey with CARBYKE.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* BUY */}
          <button
            onClick={() => navigate("Buy")}
            className="group rounded-2xl border border-slate-800 bg-[#0b1620] p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/10"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
              <CarFront size={30} />
            </div>
            <h3 className="text-2xl font-bold">Buy Vehicles</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Explore a wide range of second-hand cars and bikes and find your
              perfect match.
            </p>
            <span className="mt-7 flex items-center gap-2 text-sm font-bold text-red-500">
              Explore Vehicles <ArrowRight size={17} />
            </span>
          </button>

          {/* SELL */}
          <button
            onClick={() => navigate("Sell")}
            className="group rounded-2xl border border-slate-800 bg-[#0b1620] p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/10"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
              <Bike size={30} />
            </div>
            <h3 className="text-2xl font-bold">Sell Vehicles</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              List your car or bike and connect with potential buyers through
              CARBYKE.
            </p>
            <span className="mt-7 flex items-center gap-2 text-sm font-bold text-red-500">
              Sell Your Vehicle <ArrowRight size={17} />
            </span>
          </button>

          {/* RENT */}
          <button
            onClick={() => navigate("Rent")}
            className="group relative overflow-hidden rounded-2xl border border-red-500/60 bg-gradient-to-br from-[#4b0718] via-[#210b15] to-[#0b1620] p-7 text-left shadow-lg shadow-red-600/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl transition group-hover:bg-red-500/40" />

            <div className="relative mb-6 grid h-14 w-14 place-items-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/30">
              <KeyRound size={30} />
            </div>

            <span className="relative mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-[10px] font-extrabold tracking-wider">
              FEATURED
            </span>

            <h3 className="relative text-2xl font-bold">Rent Vehicles</h3>

            <p className="relative mt-3 text-sm leading-6 text-slate-300">
              Need a ride for a day or a week? Find a vehicle that fits your
              journey and budget.
            </p>

            <span className="relative mt-7 flex items-center gap-2 text-sm font-bold text-red-400">
              Explore Rentals <ArrowRight size={17} />
            </span>
          </button>
        </div>
      </section>

      {/* WHY CARBYKE */}
      <section className="border-y border-slate-800 bg-[#09121b] px-5 py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[4px] text-red-500">
              WHY CARBYKE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              A Smarter Way to Find Your Ride
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Safer Choices",
                text: "Make informed decisions with vehicle and seller details.",
              },
              {
                icon: Search,
                title: "Easy Discovery",
                text: "Find cars and bikes with convenient search options.",
              },
              {
                icon: BadgeCheck,
                title: "More Options",
                text: "Explore different vehicles in one marketplace.",
              },
              {
                icon: Headphones,
                title: "Simple Experience",
                text: "A straightforward experience for buyers and sellers.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-5 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-red-500/30 bg-gradient-to-r from-[#300814] to-[#111923] px-6 py-14 text-center shadow-2xl shadow-red-900/10 sm:px-12">
          <p className="text-xs font-bold tracking-[4px] text-red-400">
            YOUR NEXT JOURNEY
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Ready to Find Your
            <span className="text-red-500"> Ride?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Explore cars and bikes, list your vehicle or discover rental options
            with CARBYKE.
          </p>
          <button
            onClick={() => navigate("Buy")}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-sm font-bold transition hover:scale-105 hover:bg-red-500"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
