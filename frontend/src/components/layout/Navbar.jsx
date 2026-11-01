import {
  CarFront,
  Menu,
  UserRound,
  ShoppingCart,
  KeyRound,
  Tag,
} from "lucide-react";

import HamburgerDrawer from "../HumBurger/HamburgerDrawer";

function Navbar({
  page,
  navigate,
  wishlistCount = 0,
  onLogin,
  mobileMenu,
  setMobileMenu,
  isLoggedIn = false,
}) {
  const mainNavItems = [
    { name: "Buy", icon: ShoppingCart, subtitle: "Find Vehicles" },
    { name: "Rent", icon: KeyRound, subtitle: "Drive Your Way" },
    { name: "Sell", icon: Tag, subtitle: "Sell Your Vehicle" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 shadow-[0_8px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        <div className="mx-auto grid min-h-[86px] max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 lg:px-8">
          {/* LEFT: HAMBURGER + LOGO */}
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setMobileMenu(true)}
              className="group grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/10 hover:shadow-[0_0_20px_rgba(229,9,47,0.25)] active:scale-90"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenu}
            >
              <Menu
                size={23}
                className="transition-all duration-300 group-hover:rotate-90 group-hover:text-red-500"
              />
            </button>

            <button
              onClick={() => navigate("Home")}
              className="group flex shrink-0 items-center gap-2"
              aria-label="CARBYKE home"
            >
              <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-red-500/40 bg-gradient-to-br from-red-600/25 to-black shadow-[0_0_18px_rgba(229,9,47,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-red-400 group-hover:shadow-[0_0_30px_rgba(229,9,47,0.4)]">
                <CarFront
                  size={29}
                  className="relative z-10 text-red-500 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>

              <span>
                <span className="block text-xl font-black tracking-tight text-white sm:text-2xl">
                  CAR<span className="text-red-500">BYKE</span>
                </span>
                <span className="block text-[8px] font-semibold tracking-[0.23em] text-gray-400">
                  BUY · SELL · RENT
                </span>
              </span>
            </button>
          </div>

          {/* CENTER: MAIN NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-3 md:flex"
          >
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const active = page === item.name;
              const isRent = item.name === "Rent";

              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.name)}
                  aria-current={active ? "page" : undefined}
                  className={`
                    group relative flex shrink-0 items-center gap-2.5
                    overflow-hidden rounded-xl border
                    transition-all duration-500 ease-out
                    hover:-translate-y-1.5 active:scale-95
                    $
                    style={
  active
    ? {
        backgroundColor: "#dc143c",
        backgroundImage: "linear-gradient(135deg, #f0143d, #a90025)",
        border: "1px solid #ff3657",
        color: "#ffffff",
        boxShadow: "0 5px 28px rgba(229, 9, 47, 0.5)",
      }
    : {}
}{
                      isRent
                        ? "min-h-[64px] min-w-[150px] px-5 py-3"
                        : "min-h-[52px] min-w-[112px] px-4 py-2.5"
                    }
                    ${
                      active
  ? "text-white"
  : isRent
    ? "border-red-500/50 bg-gradient-to-br from-red-950/60 to-[#151010]"
    : "border-white/10 bg-white/[0.035]"
                    }
                  `}
                >
                  {/* SHINE ANIMATION */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* ICON */}
                  <Icon
                    size={isRent ? 25 : 21}
                    className={`relative z-10 shrink-0 transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 ${
                      active
                        ? "text-white"
                        : "text-gray-400 group-hover:text-red-400"
                    }`}
                  />

                  {/* LABEL */}
                  <span className="relative z-10 text-left">
                    <span
                      className={`block font-extrabold tracking-wide ${
                        isRent ? "text-base" : "text-sm"
                      } ${
                        active
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </span>

                    <span
                      className={`block whitespace-nowrap text-[9px] ${
                        active
                          ? "text-white/80"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </span>

                  {/* ACTIVE INDICATOR */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[3px] rounded-full transition-all duration-500 ${
                      active
                        ? "scale-x-100 bg-white shadow-[0_0_12px_white]"
                        : "scale-x-0 bg-red-500 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* RIGHT: PREMIUM LOGIN */}
          <div className="flex justify-end">
            {isLoggedIn ? (
              <button
                onClick={onLogin}
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-red-500/60 bg-gradient-to-r from-red-950 to-[#19070b] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(229,9,47,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-red-400 hover:shadow-[0_8px_30px_rgba(229,9,47,0.35)] active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <UserRound
                  size={19}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="relative z-10 hidden sm:inline">Profile</span>
              </button>
            ) : (
              <button
                onClick={onLogin}
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-red-400/70 bg-gradient-to-r from-red-600 via-red-600 to-red-800 px-3 py-3 text-xs font-extrabold tracking-wide text-white shadow-[0_5px_22px_rgba(229,9,47,0.25)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-red-300 hover:shadow-[0_8px_32px_rgba(229,9,47,0.45)] active:scale-95 sm:px-5 sm:text-sm"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <UserRound
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />

                <span className="relative z-10 whitespace-nowrap">
                  Login / Sign Up
                </span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <HamburgerDrawer
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
        navigate={navigate}
        wishlistCount={wishlistCount}
        isLoggedIn={isLoggedIn}
        onLogin={onLogin}
      />
    </>
  );
}

export default Navbar;
