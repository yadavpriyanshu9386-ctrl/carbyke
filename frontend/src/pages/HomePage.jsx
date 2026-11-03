import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  CarFront,
  KeyRound,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Sparkles,
  Gauge,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

import VideoBackground from "../components/Background/VideoBackground";
import homeVideo from "../components/Background/Home.bg.mp4";

const categories = [
  {
    title: "Luxury Cars",
    subtitle: "Experience premium comfort",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    type: "Cars",
  },
  {
    title: "Sports Cars",
    subtitle: "Feel the adrenaline",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    type: "Cars",
  },
  {
    title: "Motorcycles",
    subtitle: "Ride beyond limits",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
    type: "Bikes",
  },
];

const services = [
  {
    title: "Buy a Vehicle",
    description:
      "Explore a wide range of pre-owned cars and bikes. Find the ride that matches your style and budget.",
    icon: CarFront,
    number: "01",
    action: "Explore Vehicles",
    page: "Buy",
  },
  {
    title: "Sell Your Vehicle",
    description:
      "List your car or bike and connect with people searching for their next ride.",
    icon: BadgeCheck,
    number: "02",
    action: "Start Selling",
    page: "Sell",
  },
  {
    title: "Rent a Vehicle",
    description:
      "Discover flexible rental options for your trips, daily commute and weekend plans.",
    icon: KeyRound,
    number: "03",
    action: "Explore Rentals",
    page: "Rent",
  },
];

const heroCards = [
  {
    number: "01",
    title: "Buy & Discover",
    description: "Explore pre-owned cars and bikes across brands and budgets.",
    icon: CarFront,
    color: "from-red-500/20 to-rose-500/5",
  },
  {
    number: "02",
    title: "Sell with Ease",
    description:
      "Create your listing and connect with people looking for their next ride.",
    icon: BadgeCheck,
    color: "from-purple-500/20 to-red-500/5",
  },
  {
    number: "03",
    title: "Rent & Ride",
    description: "Find a vehicle for your trip, commute or weekend plan.",
    icon: KeyRound,
    color: "from-blue-500/20 to-red-500/5",
  },
  {
    number: "04",
    title: "One Mobility Hub",
    description: "One platform bringing buyers, sellers and renters together.",
    icon: ShieldCheck,
    color: "from-rose-500/20 to-slate-500/5",
  },
];

const features = [
  {
    title: "Trusted Marketplace",
    description:
      "A simple platform designed to make your vehicle journey easier.",
    icon: ShieldCheck,
  },
  {
    title: "More Choices",
    description: "Explore different cars and bikes in one convenient place.",
    icon: Gauge,
  },
  {
    title: "Simple Experience",
    description:
      "Discover, compare and explore without unnecessary complications.",
    icon: Sparkles,
  },
  {
    title: "Here to Help",
    description: "A user-friendly experience for every step of your journey.",
    icon: Headphones,
  },
];

export default function HomePage({ navigate, setSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (setSearch) {
      setSearch(searchValue);
    }

    if (navigate) {
      navigate("Buy");
    }
  };

  const goTo = (page) => {
    if (navigate) navigate(page);
  };

  return (
    <main className="home-page relative isolate overflow-hidden bg-transparent text-white">
      {/* VIDEO BACKGROUND */}
      <VideoBackground src={homeVideo} />

      {/* HOMEPAGE CONTENT */}
      <div className="relative z-10">
        <style>{`
          .home-info-card {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,.16);
            background: linear-gradient(
              135deg,
              rgba(18,18,22,.94),
              rgba(8,8,11,.90)
            );
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            transition:
              transform .35s ease,
              border-color .35s ease,
              background .35s ease;
          }

          .home-info-card::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            opacity: 0;
            background: linear-gradient(
              135deg,
              rgba(225,29,72,.22),
              transparent 65%
            );
            transition: opacity .35s ease;
          }

          .home-info-card:hover {
            transform: translateY(-7px);
            border-color: rgba(244,63,94,.65);
            background: linear-gradient(
              135deg,
              rgba(35,12,19,.96),
              rgba(12,12,16,.94)
            );
          }

          .home-info-card:hover::before {
            opacity: 1;
          }

          .home-info-card:hover .home-card-icon {
            transform: rotate(-8deg) scale(1.1);
            background: rgba(225,29,72,.25);
          }

          .home-card-icon {
            transition: all .35s ease;
          }

          .home-service-card {
            background: rgba(12,12,16,.92);
            border: 1px solid rgba(255,255,255,.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: transform .35s ease, border-color .35s ease;
          }

          .home-service-card:hover {
            transform: translateY(-8px);
            border-color: rgba(244,63,94,.5);
          }

          .home-feature-card {
            background: rgba(12,12,16,.92);
            border: 1px solid rgba(255,255,255,.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .home-image-card img {
            transition: transform .7s ease;
          }

          .home-image-card:hover img {
            transform: scale(1.08);
          }

          .home-cta-panel {
            background: rgba(12,12,16,.94);
            border: 1px solid rgba(225,29,72,.35);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
          }

          .home-cta-glow {
            animation: homeGlow 4s ease-in-out infinite;
          }

          .home-cta-button {
            position: relative;
            overflow: hidden;
          }

          .home-cta-button::after {
            content: "";
            position: absolute;
            top: -20%;
            left: 0;
            width: 35%;
            height: 140%;
            background: rgba(255,255,255,.25);
            transform: translateX(-150%) skewX(-20deg);
          }

          .home-cta-button:hover::after {
            animation: homeShine .7s ease;
          }
            @keyframes homeFloatZoom {
  0%, 100% {
    scale: 1;
    translate: 0 0;
  }

  50% {
    scale: 1.035;
    translate: 0 -9px;
  }
}

.home-floating-card {
  animation: homeFloatZoom 4s ease-in-out infinite;
  will-change: scale, translate;
}

          @keyframes homeReveal {
            0% {
              opacity: 0;
              transform: translateY(28px);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes homeBubble {
            0% { transform: scale(.94); }
            55% { transform: scale(1.035); }
            100% { transform: scale(1); }
          }

          @keyframes homeGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          @keyframes homeGlow {
            0%, 100% { opacity: .35; }
            50% { opacity: .75; }
          }

          @keyframes homeShine {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(250%) skewX(-20deg); }
          }

          .home-enter {
            opacity: 0;
            animation: homeReveal .85s cubic-bezier(.2,.7,.2,1) forwards;
          }

          .home-gradient-text {
            display: inline-block;
            background: linear-gradient(
              100deg,
              #ffffff 0%,
              #ff718a 22%,
              #ed1745 42%,
              #c3b5ff 65%,
              #ffffff 82%,
              #ff496b 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: homeGradient 7s linear infinite;
          }

          .home-bubble-title {
            animation:
              homeReveal 1s ease-out both,
              homeBubble 1.2s .3s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .home-page *,
            .home-page *::before,
            .home-page *::after {
              animation-duration: .01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: .01ms !important;
            }
          }
        `}</style>

        {/* HERO SECTION */}
        <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-14 lg:pb-28 lg:pt-28">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-600/10 blur-[130px]" />
          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-rose-500/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            {/* LEFT CONTENT */}
            <div>
              <div
                className="home-enter mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-red-300"
                style={{ animationDelay: "100ms" }}
              >
                <Sparkles size={14} />
                YOUR MOBILITY. YOUR CHOICE.
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-[76px]">
                <span
                  className="home-bubble-title block home-gradient-text"
                  style={{ animationDelay: "180ms" }}
                >
                  FIND YOUR RIDE.
                </span>

                <span
                  className="home-bubble-title mt-2 block text-white"
                  style={{ animationDelay: "350ms" }}
                >
                  OWN THE <span className="home-gradient-text">ROAD.</span>
                </span>
              </h1>

              <p
                className="home-enter mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg"
                style={{ animationDelay: "500ms" }}
              >
                Buy, sell or rent your next vehicle with CARBYKE. Discover a
                smarter way to explore the world of cars and bikes.
              </p>

              {/* SEARCH */}
              <form
                onSubmit={handleSearch}
                className="home-enter mt-9 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/15 bg-black/75 p-3 backdrop-blur-xl sm:flex-row"
                style={{ animationDelay: "650ms" }}
              >
                <div className="flex flex-1 items-center gap-3 px-3">
                  <Search className="shrink-0 text-red-400" size={20} />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search cars, bikes..."
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3 font-bold transition hover:bg-red-500"
                >
                  Search <ArrowRight size={17} />
                </button>
              </form>

              {/* QUICK ACTIONS */}
              <div
                className="home-enter mt-6 flex flex-wrap gap-3"
                style={{ animationDelay: "780ms" }}
              >
                <button
                  onClick={() => goTo("Buy")}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-5 py-3 text-sm font-semibold text-gray-100 transition hover:border-red-500 hover:bg-red-500/10"
                >
                  <CarFront size={17} /> Buy Vehicle
                </button>

                <button
                  onClick={() => goTo("Rent")}
                  className="flex items-center gap-2 rounded-full border border-red-500/50 bg-red-600/20 px-5 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-600 hover:text-white"
                >
                  <KeyRound size={17} /> Rent a Vehicle
                </button>
              </div>

              <div
                className="home-enter mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-300"
                style={{ animationDelay: "900ms" }}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-red-400" />
                  Cars & Bikes
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-red-400" />
                  Buy, Sell & Rent
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-red-400" />
                  One Platform
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: FOUR FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.number}
                    className="home-info-card home-enter home-floating-card group min-h-[190px] rounded-2xl p-4 sm:min-h-[220px] sm:p-6"
                    style={{ animationDelay: `${350 + index * 150}ms` }}
                  >
                    <div
                      className={`absolute inset-0 -z-10 bg-gradient-to-br ${card.color} opacity-70`}
                    />

                    <div className="mb-5 flex items-center justify-between">
                      <div className="home-card-icon flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-400">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-bold tracking-widest text-gray-400">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-300 sm:text-sm">
                      {card.description}
                    </p>

                    <div className="mt-4 h-[2px] w-9 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BUY SELL RENT SECTION */}
        <section className="px-5 py-16 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[.25em] text-red-400">
                  WHAT YOU CAN DO
                </p>

                <h2 className="text-3xl font-black sm:text-5xl">
                  YOUR RIDE,{" "}
                  <span className="home-gradient-text">YOUR WAY.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-gray-300">
                Everything you need to make your next vehicle decision, all in
                one place.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="home-service-card home-enter rounded-3xl p-7"
                    style={{
                      animationDelay: `${index * 0.7}s`,
                    }}
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400">
                        <Icon size={26} />
                      </div>

                      <span className="text-sm font-bold tracking-widest text-gray-400">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold">{service.title}</h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-7 text-gray-300">
                      {service.description}
                    </p>

                    <button
                      onClick={() => goTo(service.page)}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-red-400 transition hover:gap-4 hover:text-red-300"
                    >
                      {service.action} <ArrowUpRight size={17} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED COLLECTION */}
        <section className="px-5 py-16 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold tracking-[.25em] text-red-400">
                EXPLORE THE COLLECTION
              </p>

              <h2 className="text-3xl font-black sm:text-5xl">
                FIND YOUR <span className="home-gradient-text">MACHINE.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300">
                From everyday rides to extraordinary machines, discover what
                moves you.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {categories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => goTo("Buy")}
                  className="home-image-card home-enter group relative h-[320px] overflow-hidden rounded-3xl border border-white/10 text-left"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-red-300">
                      {category.type}
                    </span>

                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-black">
                          {category.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-200">
                          {category.subtitle}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition group-hover:scale-110">
                        <MoveUpRight size={19} />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CARBYKE */}
        <section className="px-5 py-20 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-bold tracking-[.25em] text-red-400">
                THE CARBYKE DIFFERENCE
              </p>

              <h2 className="text-3xl font-black sm:text-5xl">
                WHY <span className="home-gradient-text">CARBYKE?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-300">
                A better way to discover, buy, sell and rent vehicles.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="home-feature-card home-enter rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
                    style={{ animationDelay: `${index * 130}ms` }}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-lg font-bold">{feature.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-5 pb-20 pt-10 sm:px-8 lg:px-14">
          <div className="home-cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-[28px] px-6 py-10 text-center sm:px-12 sm:py-12">
            <div className="home-cta-glow pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-red-600/20 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-rose-600/10 blur-[90px]" />

            <div className="relative">
              <div className="home-enter mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400">
                <Sparkles size={21} />
              </div>

              <p className="home-enter text-xs font-bold tracking-[.25em] text-red-300">
                YOUR JOURNEY STARTS HERE
              </p>

              <h2
                className="home-enter mt-4 text-3xl font-black leading-tight sm:text-5xl"
                style={{ animationDelay: "150ms" }}
              >
                THE ROAD IS YOURS.
                <br />
                <span className="home-gradient-text">MAKE IT COUNT.</span>
              </h2>

              <p
                className="home-enter mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-200 sm:text-base"
                style={{ animationDelay: "300ms" }}
              >
                Explore cars and bikes, list your vehicle or discover rental
                options with CARBYKE.
              </p>

              <button
                onClick={() => goTo("Buy")}
                className="home-cta-button home-enter mt-7 inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-1 hover:bg-red-500"
                style={{ animationDelay: "450ms" }}
              >
                Explore CARBYKE <ArrowRight size={18} />
              </button>

              <p
                className="home-enter mt-6 text-[10px] font-semibold tracking-[.22em] text-gray-300 sm:text-xs"
                style={{ animationDelay: "550ms" }}
              >
                CARBYKE — YOUR MOBILITY, YOUR CHOICE.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
