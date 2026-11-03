
import {
  ChevronRight,
  Lock,
  Sparkles,
} from "lucide-react";

function MenuItem({
  item,
  onSelect,
  wishlistCount = 0,
}) {
  const Icon = item.icon;

  const isWishlist = item.name === "Wishlist";
  const isMyListings = item.name === "My Listings";

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`${item.name}${item.comingSoon ? ", coming soon" : ""}`}
      className={`
        group relative flex w-full items-center gap-3
        overflow-hidden rounded-xl border px-3.5 py-3.5
        text-left transition-all duration-300 ease-out

        ${
          isWishlist || isMyListings
            ? "border-red-500/25 bg-gradient-to-r from-red-950/50 via-[#171014]/80 to-black/50"
            : "border-white/[0.07] bg-gradient-to-r from-white/[0.045] to-white/[0.015]"
        }

        hover:translate-x-1.5
        hover:border-red-500/40
        hover:bg-gradient-to-r hover:from-red-950/60 hover:to-black/60
        hover:shadow-[0_5px_25px_rgba(220,38,38,0.13)]

        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-500/60
      `}
    >
      {/* HOVER GLOW */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-600/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* LEFT ACCENT */}
      <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-red-500 opacity-0 shadow-[0_0_12px_#ef4444] transition-all duration-300 group-hover:opacity-100" />

      {/* ICON */}
      <span
        className={`
          relative grid h-10 w-10 shrink-0 place-items-center
          rounded-xl border transition-all duration-300

          ${
            isWishlist || isMyListings
              ? "border-red-500/30 bg-red-500/10 text-red-400"
              : "border-white/10 bg-white/[0.04] text-gray-400"
          }

          group-hover:scale-110
          group-hover:border-red-500/40
          group-hover:bg-red-500/15
          group-hover:text-red-400
          group-hover:shadow-[0_0_18px_rgba(220,38,38,0.15)]
        `}
      >
        <Icon size={19} strokeWidth={1.8} />
      </span>

      {/* MENU NAME */}
      <span className="relative min-w-0 flex-1">
        <span
          className={`
            block truncate text-[12px] font-extrabold
            uppercase tracking-[0.8px] transition-colors duration-300

            ${
              isWishlist || isMyListings
                ? "text-white"
                : "text-gray-300"
            }

            group-hover:text-white
          `}
        >
          {item.name}
        </span>

        {(isWishlist || isMyListings) && (
          <span className="mt-1 block text-[9px] font-medium tracking-wide text-gray-500">
            {isWishlist
              ? "Your favourite vehicles"
              : "Manage your vehicles"}
          </span>
        )}
      </span>

      {/* WISHLIST COUNT */}
      {isWishlist && wishlistCount > 0 && (
        <span className="relative flex h-6 min-w-6 items-center justify-center rounded-full border border-red-400/40 bg-gradient-to-br from-red-500 to-red-800 px-2 text-[10px] font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.35)]">
          {wishlistCount}
        </span>
      )}

      {/* LOGIN LOCK */}
      {item.loginRequired && (
        <span
          title="Login required"
          className="relative grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-500 transition-all duration-300 group-hover:border-red-500/30 group-hover:text-red-400"
        >
          <Lock size={12} />
        </span>
      )}

      {/* COMING SOON */}
      {item.comingSoon ? (
        <span className="relative flex items-center gap-1 rounded-md border border-red-500/20 bg-red-500/[0.07] px-2 py-1 text-[8px] font-black uppercase tracking-wider text-red-400">
          <Sparkles size={10} />
          Soon
        </span>
      ) : (
        <ChevronRight
          size={17}
          className="relative shrink-0 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400"
        />
      )}
    </button>
  );
}

export default MenuItem;
