
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
} from "lucide-react";

function HomePage({ navigate, setSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(query);
    navigate("Buy");
  };

  const categories = [
    {
      title: "Luxury Cars",
      subtitle: "Experience premium driving",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1100&q=90",
    },
    {
      title: "Sports Cars",
      subtitle: "Power. Performance. Passion.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=90",
    },
    {
      title: "Motorcycles",
      subtitle: "Find your next adventure",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1100&q=90",
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[680px] overflow-hidden border-b border-white/5 lg:min-h-[740px]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_55%]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=90)",
          }}
        />

        {/* Balanced overlay: image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

        {/* Red lighting */}
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-red-700/15 blur-[130px]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1450px] items-center px-5 py-24 sm:px-10 lg:min-h-[740px] lg:px-16">

          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-black/50 px-5 py-3 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]" />
              <span className="text-[10px] font-bold tracking-[3px] text-red-300 sm:text-xs">
                THE PREMIUM WAY TO MOVE
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
              DRIVE YOUR
              <br />
              DREAM.
              <br />
              <span className="text-red-500">
                OWN YOUR JOURNEY.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
              Discover exceptional cars and bikes. Buy, sell or rent
              your next ride with CARBYKE — one destination for
              every journey.
            </p>

            {/* SEARCH */}
            <form
              onSubmit={handleSearch}
              className="mt-9 flex max-w-2xl flex-col gap-2 rounded-2xl border border-white/15 bg-[#171717]/90 p-2 shadow-2xl backdrop-blur-xl sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search size={21} className="shrink-0 text-red-500" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search cars, bikes or brands..."
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-sm font-bold transition duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30"
              >
                Search Vehicles
                <ArrowRight size={17} />
              </button>
            </form>

            {/* HERO BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-4">

              <button
                onClick={() => navigate("Buy")}
                className="group flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30"
              >
                Explore Vehicles
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={() => navigate("Rent")}
                className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/15"
              >
                <KeyRound size={18} className="text-red-400" />
                Rent a Vehicle
              </button>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 text-xs text-gray-300">

              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-red-500" />
                Easy Experience
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-500" />
                Trusted Marketplace
              </span>

              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-red-500" />
                Cars & Bikes
              </span>

            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-10 hidden items-center gap-3 text-[10px] tracking-[3px] text-white/60 lg:flex">
          <span className="h-px w-12 bg-red-500" />
          DISCOVER THE DIFFERENCE
        </div>
      </section>

      {/* BUY SELL RENT */}
      <section className="mx-auto max-w-[1450px] px-5 py-20 sm:px-10 lg:px-16">

        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[4px] text-red-500">
            WHAT ARE YOU LOOKING FOR?
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            EVERYTHING YOU NEED,
            <span className="text-red-500"> ONE PLACE.</span>
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            Choose your journey with CARBYKE.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* BUY */}
          <button
            onClick={() => navigate("Buy")}
            className="group rounded-2xl border border-white/10 bg-[#151515] p-8 text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10"
          >
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
              <CarFront size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">Buy Vehicles</h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Explore second-hand cars and bikes and find
              your perfect match.
            </p>

            <span className="mt-7 flex items-center gap-2 text-sm font-bold text-red-500">
              Explore Vehicles <ArrowRight size={17} />
            </span>
          </button>

          {/* SELL */}
          <button
            onClick={() => navigate("Sell")}
            className="group rounded-2xl border border-white/10 bg-[#151515] p-8 text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/10"
          >
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-red-500/10 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
              <Bike size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">Sell Vehicles</h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              List your car or bike and connect with potential
              buyers through CARBYKE.
            </p>

            <span className="mt-7 flex items-center gap-2 text-sm font-bold text-red-500">
              Sell Your Vehicle <ArrowRight size={17} />
            </span>
          </button>

          {/* RENT */}
          <button
            onClick={() => navigate("Rent")}
            className="group relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-br from-[#3b0b15] via-[#1c0c11] to-[#151515] p-8 text-left transition duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/20"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/30">
              <KeyRound size={30} />
            </div>

            <p className="relative mt-7 text-[10px] font-bold tracking-[3px] text-red-300">
              YOUR JOURNEY, YOUR WAY
            </p>

            <h3 className="relative mt-2 text-2xl font-bold">
              Rent Vehicles
            </h3>

            <p className="relative mt-3 text-sm leading-7 text-gray-300">
              Find a vehicle for your next trip, daily commute
              or weekend adventure.
            </p>

            <span className="relative mt-7 flex items-center gap-2 text-sm font-bold text-red-400">
              Explore Rentals <ArrowRight size={17} />
            </span>
          </button>

        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="border-y border-white/5 bg-[#101010] py-20">

        <div className="mx-auto max-w-[1450px] px-5 sm:px-10 lg:px-16">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-[3px] text-red-500">
                <Sparkles size={16} />
                EXPLORE THE COLLECTION
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                FIND YOUR
                <span className="text-red-500"> STYLE.</span>
              </h2>

              <p className="mt-4 text-sm text-gray-400">
                From luxury automobiles to powerful motorcycles.
              </p>
            </div>

            <button
              onClick={() => navigate("Buy")}
              className="flex items-center gap-2 text-sm font-bold text-red-500 transition hover:text-red-400"
            >
              View All Vehicles
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {categories.map((item, index) => (
              <button
                key={item.title}
                onClick={() => navigate("Buy")}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#191919] text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="relative h-[250px] overflow-hidden sm:h-[290px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[3px] text-white/80">
                    0{index + 1} / CARBYKE
                  </span>
                </div>

                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-red-500 transition group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CARBYKE */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-10 lg:px-16">

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-900/10 blur-[130px]" />

        <div className="relative mx-auto max-w-[1450px]">

          <div className="text-center">
            <p className="text-xs font-bold tracking-[4px] text-red-500">
              THE CARBYKE EXPERIENCE
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              MORE THAN JUST
              <span className="text-red-500"> A RIDE.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Buying, selling and renting — everything comes
              together in one vehicle marketplace.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group text-center"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500 transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-10 lg:px-16">

        <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-[#390a15] via-[#1b0b10] to-[#111111] px-6 py-16 text-center shadow-2xl shadow-red-950/20 sm:px-14 sm:py-20">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-red-600/15 blur-[100px]" />

          <div className="relative">

            <p className="text-xs font-bold tracking-[4px] text-red-400">
              YOUR NEXT JOURNEY
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-6xl">
              THE ROAD IS YOURS.
              <span className="block text-red-500">
                MAKE IT COUNT.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-300">
              Explore cars and bikes, list your vehicle or
              discover rental options with CARBYKE.
            </p>

            <button
              onClick={() => navigate("Buy")}
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-red-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              Explore CARBYKE
              <ArrowRight size={19} />
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;


