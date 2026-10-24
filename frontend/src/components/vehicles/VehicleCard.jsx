import {
  CalendarDays,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  MessageCircle,
  Settings2,
} from "lucide-react";
import { money } from "../../utils/format.js";

function VehicleCard({ v, view, wished, onWish, onSelect }) {
  return (
    <article
      key={v.id}
      className={`vehicle-card group ${view === "list" ? "sm:flex sm:items-stretch" : ""}`}
    >
      <div
        className={`vehicle-image relative ${view === "list" ? "sm:w-72 sm:shrink-0" : ""}`}
      >
        <img src={v.img} alt={v.name} loading="lazy" />
        {v.badge && (
          <span className="absolute left-2 top-2 rounded bg-red px-2 py-1 text-[10px] font-bold">
            {v.badge}
          </span>
        )}
        <button
          aria-label="Toggle wishlist"
          onClick={() => onWish()}
          className={`absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/70 transition hover:scale-105 ${wished ? "text-red" : "text-white"}`}
        >
          <Heart
            size={17}
            fill={
              wished ? "currentColor" : "none"
            }
          />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <button
          className="text-left text-sm font-bold hover:text-red"
          onClick={() => onSelect(v)}
        >
          {v.name}
        </button>
        <p className="mt-0.5 text-[11px] text-slate-400">
          {v.trim}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-y-2 text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {v.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge size={13} />
            {v.km.toLocaleString("en-IN")} km
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={13} />
            {v.fuel}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 size={13} />
            {v.transmission}
          </span>
          <span className="col-span-2 flex items-center gap-1.5">
            <MapPin size={13} />
            {v.city}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-extrabold text-red">
            {money(v.price)}
          </span>
          <span className="rounded-full border border-emerald-800 bg-emerald-950/60 px-2 py-0.5 text-[10px] text-emerald-200">
            Negotiable
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onSelect(v)}
            className="flex-1 rounded-lg bg-red py-2.5 text-xs font-bold transition hover:bg-rose-600"
          >
            View Details
          </button>
          <a
            className="grid w-10 place-items-center rounded-lg border border-line hover:border-emerald-500 hover:text-emerald-400"
            href={`https://wa.me/917050862508?text=${encodeURIComponent(`Hi, I'm interested in ${v.name}`)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp seller"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default VehicleCard;
