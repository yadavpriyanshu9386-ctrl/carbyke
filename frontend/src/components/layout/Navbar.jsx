import {
  CarFront,
  Heart,
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react";

function Navbar({ page, navigate, wishlistCount, onLogin, mobileMenu, setMobileMenu }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-[#040a10]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-4 lg:px-8">
        <button
          className="flex items-center gap-2.5 text-left"
          onClick={() => navigate("Buy")}
          aria-label="DriveDeals home"
        >
          <span className="grid h-10 w-12 place-items-center text-red">
            <CarFront size={42} strokeWidth={1.8} />
          </span>
          <span>
            <span className="block text-[22px] font-extrabold leading-5 tracking-tight">
              Drive<span className="text-red">Deals</span>
            </span>
            <span className="text-[10px] tracking-wider text-slate-300">
              Buy · Sell · Rent
            </span>
          </span>
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            "Home",
            "Buy",
            "Sell",
            "Rent",
            "My Listings",
            "Wishlist",
            "About Us",
          ].map((item) => (
            <button
              key={item}
              onClick={() => navigate(item === "Home" ? "Buy" : item)}
              className={`nav-link ${page === item ? "active" : ""}`}
            >
              {item}
              {item === "Wishlist" && wishlistCount > 0 && (
                <span className="ml-1 rounded-full bg-red px-1.5 text-[10px]">
                  {wishlistCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="icon-btn hidden sm:grid"
            title="Search"
            onClick={() => {
              navigate("Buy");
              document.getElementById("vehicle-search")?.focus();
            }}
          >
            <Search size={19} />
          </button>
          <button
            className="icon-btn relative hidden sm:grid"
            title="Wishlist"
            onClick={() => navigate("Wishlist")}
          >
            <Heart size={19} />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-red px-1 text-[9px]">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            className="icon-btn hidden sm:grid"
            title="Account"
            onClick={() => onLogin()}
          >
            <UserRound size={19} />
          </button>
          <button
            className="rounded-lg border border-red px-3 py-2 text-xs font-semibold transition hover:bg-red sm:px-4 sm:text-sm"
            onClick={() => onLogin()}
          >
            Login / Sign Up
          </button>
          <button
            className="icon-btn md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className="grid grid-cols-2 gap-2 border-t border-line p-3 md:hidden">
          {[
            "Home",
            "Buy",
            "Sell",
            "Rent",
            "My Listings",
            "Wishlist",
            "About Us",
          ].map((item) => (
            <button
              key={item}
              className="rounded-lg bg-panel p-3 text-sm"
              onClick={() => navigate(item === "Home" ? "Buy" : item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
