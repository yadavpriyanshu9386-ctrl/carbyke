import {
  CarFront,
  Bike,
  Menu,
  UserRound,
  ShoppingCart,
  KeyRound,
  Tag,
  X,
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
    { name: "Buy", icon: ShoppingCart },
    { name: "Rent", icon: KeyRound },
    { name: "Sell", icon: Tag },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-red-500/30 bg-gradient-to-r from-[#090909] via-[#260710] to-[#090909] shadow-[0_8px_35px_rgba(220,20,60,0.22)] backdrop-blur-2xl">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 left-[20%] h-32 w-48 rounded-full bg-red-600/15 blur-[70px]" />
          <div className="absolute -top-12 right-[15%] h-32 w-48 rounded-full bg-red-800/20 blur-[70px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.035] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[78px] max-w-[1500px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-8">
          {/* LEFT: HAMBURGER + BRAND */}
          <div className="flex min-w-0 items-center gap-3">
            {/* MOBILE HAMBURGER BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="group grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-red-500/50 bg-gradient-to-br from-red-600/20 to-black text-white shadow-[0_0_15px_rgba(229,9,47,0.2)] transition-all duration-300 hover:border-red-400 hover:bg-red-600/30 hover:shadow-[0_0_22px_rgba(229,9,47,0.4)] active:scale-90"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu
                  size={22}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              )}
            </button>

            {/* CARBYKE BRAND */}
            <button
              type="button"
              onClick={() => navigate("Home")}
              className="group flex shrink-0 items-center gap-2.5"
              aria-label="CARBYKE home"
            >
              {/* CAR + BIKE LOGO */}
              <div className="relative flex h-12 w-14 items-center justify-center overflow-hidden rounded-xl border border-red-400/40 bg-gradient-to-br from-red-600/30 via-black to-[#31000d] shadow-[0_0_22px_rgba(229,9,47,0.22)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-red-400 group-hover:shadow-[0_0_30px_rgba(229,9,47,0.5)]">
                <CarFront
                  size={27}
                  className="absolute -left-0.5 top-1/2 -translate-y-1/2 text-white transition-all duration-500 group-hover:scale-110"
                />

                <Bike
                  size={25}
                  className="absolute -right-0.5 top-1/2 -translate-y-1/2 text-red-400 transition-all duration-500 group-hover:scale-110"
                />

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>

              {/* BRAND NAME */}
              <span className="relative text-[21px] font-black tracking-[-1px] sm:text-[26px]">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  CAR
                </span>

                <span className="bg-gradient-to-r from-[#FFD700] via-[#FF6B35] to-[#DC143C] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(220,20,60,0.35)]">
                  BYKE
                </span>

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-red-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </span>
            </button>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-3 md:flex lg:gap-4"
          >
            {mainNavItems.map((item, index) => {
              const Icon = item.icon;
              const active = page === item.name;
              const isRent = item.name === "Rent";

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => navigate(item.name)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    animationDelay: `${index * 0.35}s`,
                  }}
                  className={`
                    carbyke-nav-float
                    group relative flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl border
                    bg-gradient-to-br transition-all duration-300 ease-out
                    hover:-translate-y-1.5 active:scale-95
                    ${
                      isRent
                        ? "min-h-[60px] min-w-[142px] px-5 py-3"
                        : "min-h-[49px] min-w-[105px] px-4 py-2.5"
                    }
                    ${
                      active
                        ? "border-red-300 from-red-500 via-red-600 to-red-800 text-white shadow-[0_5px_25px_rgba(229,9,47,0.5)]"
                        : isRent
                          ? "border-red-400/60 from-red-700 via-red-900 to-[#25050d] text-white shadow-[0_5px_22px_rgba(229,9,47,0.3)]"
                          : "border-white/15 from-[#32101a] via-[#16090e] to-black text-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-red-400/70 hover:from-red-800 hover:to-[#17050a] hover:text-white hover:shadow-[0_6px_24px_rgba(229,9,47,0.3)]"
                    }
                  `}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <Icon
                    size={isRent ? 25 : 21}
                    className="relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-125"
                  />

                  <span className="relative z-10 text-sm font-extrabold tracking-wider">
                    {item.name.toUpperCase()}
                  </span>

                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-white shadow-[0_0_10px_white]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: ACCOUNT BUTTON */}
          <div className="flex shrink-0 items-center justify-end">
            <button
              type="button"
              onClick={onLogin}
              className="group relative flex min-h-[42px] items-center gap-2 overflow-hidden rounded-xl border border-red-400/60 bg-gradient-to-r from-red-600 via-red-700 to-red-900 px-3 text-xs font-extrabold tracking-wide text-white shadow-[0_5px_20px_rgba(229,9,47,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_8px_28px_rgba(229,9,47,0.45)] active:scale-95 sm:px-5 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <UserRound
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="relative z-10">
                {isLoggedIn ? "Profile" : "Account"}
              </span>
            </button>
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
