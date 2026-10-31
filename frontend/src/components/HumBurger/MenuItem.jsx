
import { ChevronRight, Lock } from "lucide-react";

function MenuItem({ item, onSelect, wishlistCount = 0 }) {
  const Icon = item.icon;

  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:bg-red-600/10 hover:text-white"
    >
      <Icon
        size={19}
        className="shrink-0 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-red-500"
      />

      <span className="flex-1">{item.name}</span>

      {item.name === "Wishlist" && wishlistCount > 0 && (
        <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] text-white">
          {wishlistCount}
        </span>
      )}

      {item.loginRequired && (
        <Lock size={13} className="text-gray-500" />
      )}

      {item.comingSoon ? (
        <span className="rounded-md bg-white/5 px-2 py-1 text-[9px] text-gray-500">
          Soon
        </span>
      ) : (
        <ChevronRight
          size={15}
          className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-red-500"
        />
      )}
    </button>
  );
}

export default MenuItem;
