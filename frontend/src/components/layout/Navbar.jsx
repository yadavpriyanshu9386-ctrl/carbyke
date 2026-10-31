
import {
  CarFront,
  Menu,
  Search,
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
    {
      name: "Buy",
      icon: ShoppingCart,
      subtitle: "Find Vehicles",
    },
    {
      name: "Rent",
      icon: KeyRound,
      subtitle: "Drive Your Way",
    },
    {
      name: "Sell",
      icon: Tag,
      subtitle: "Sell Your Vehicle",
    },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl">

        <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-3 px-4 lg:px-8">

          {/* LEFT: HAMBURGER + LOGO */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileMenu(true)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 transition hover:border-red-500 hover:bg-red-600/10"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenu}
            >
              <Menu size={23} />
            </button>

            {/* LOGO */}
            <button
              className="flex shrink-0 items-center gap-2"
              onClick={() => navigate("Home")}
              aria-label="CARBYKE home"
            >
              <CarFront size={38} className="text-red-500" />

              <span>
                <span className="block text-xl font-black tracking-tight">
                  CAR<span className="text-red-500">BYKE</span>
                </span>

                <span className="block text-[9px] tracking-widest text-gray-400">
                  BUY · SELL · RENT
                </span>
              </span>
            </button>
          </div>

          {/* CENTER: BUY | RENT | SELL */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-3 md:flex"
          >
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const active = page === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.name)}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex min-w-[105px] items-center gap-2.5 overflow-hidden rounded-xl border px-4 py-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
                    item.name === "Rent"
                      ? "border-red-500/60 bg-gradient-to-br from-red-600/25 to-red-950/40 shadow-md shadow-red-900/20 hover:border-red-400 hover:shadow-red-600/30"
                      : active
                        ? "border-red-500 bg-red-600/15 shadow-lg shadow-red-900/20"
                        : "border-white/10 bg-[#151515] hover:border-red-500/60 hover:bg-red-600/10"
                  }`}
                >
                  {/* HOVER SHINE */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <Icon
                    size={21}
                    className={`relative z-10 transition-transform duration-300 group-hover:scale-125 ${
                      active || item.name === "Rent"
                        ? "text-red-500"
                        : "text-gray-400 group-hover:text-red-400"
                    }`}
                  />

                  <span className="relative z-10 text-left">
                    <span
                      className={`block text-sm font-extrabold tracking-wide ${
                        active || item.name === "Rent"
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </span>

                    <span className="block whitespace-nowrap text-[9px] text-gray-500">
                      {item.subtitle}
                    </span>
                  </span>

                  {/* ACTIVE LINE */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-red-500 transition-all duration-300 ${
                      active || item.name === "Rent"
                        ? "opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* RIGHT: SEARCH + LOGIN */}
          <div className="flex shrink-0 items-center gap-2">

            <button
              className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10"
              title="Search"
              aria-label="Search vehicles"
              onClick={() => {
                navigate("Buy");

                window.setTimeout(() => {
                  document.getElementById("vehicle-search")?.focus();
                }, 100);
              }}
            >
              <Search size={20} />
            </button>

            {isLoggedIn ? (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 rounded-lg border border-red-500 px-3 py-2 text-sm font-semibold transition hover:bg-red-600"
              >
                <UserRound size={18} />
                <span className="hidden sm:inline">Profile</span>
              </button>
            ) : (
              <button
                onClick={onLogin}
                className="rounded-lg border border-red-500 px-3 py-2 text-xs font-bold transition hover:bg-red-600 sm:px-4 sm:text-sm"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </header>

      {/* HAMBURGER DRAWER COMPONENT */}
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




