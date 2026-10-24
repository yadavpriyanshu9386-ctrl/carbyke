import {
  Heart,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { money } from "../../utils/format.js";
import ModalShell from "../common/ModalShell.jsx";

function VehicleModal({ vehicle: v, wished, onWish, onClose }) {
  return (
    <ModalShell onClose={onClose}>
      <div className="relative">
        <img
          src={v.img}
          alt={v.name}
          className="h-56 w-full rounded-t-2xl object-cover"
        />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/70 p-2"
        >
          <X size={18} />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold">{v.name}</h2>
            <p className="mt-1 text-sm text-slate-400">
              {v.trim} · {v.year}
            </p>
          </div>
          <button
            onClick={onWish}
            className={`rounded-lg border border-line p-2 ${wished ? "text-red" : "text-slate-300"}`}
          >
            <Heart fill={wished ? "currentColor" : "none"} />
          </button>
        </div>
        <p className="mt-4 text-2xl font-extrabold text-red">
          {money(v.price)}{" "}
          <span className="ml-2 align-middle text-xs font-medium text-emerald-300">
            Negotiable
          </span>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ["Kilometres", v.km.toLocaleString("en-IN") + " km"],
            ["Fuel", v.fuel],
            ["Transmission", v.transmission],
            ["Owner", v.owner],
            ["Condition", v.condition],
            ["Location", v.city],
          ].map(([a, b]) => (
            <div key={a} className="rounded-lg border border-line bg-panel p-3">
              <p className="text-xs text-slate-500">{a}</p>
              <p className="mt-1 text-sm font-semibold">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <a
            href="tel:7050862508"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red py-3 text-sm font-bold"
          >
            <Phone size={16} /> Contact Seller
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/917050862508?text=${encodeURIComponent("Hi, I am interested in " + v.name)}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-bold"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          <ShieldCheck size={13} className="mr-1 inline" />
          Always verify documents and inspect the vehicle before payment.
        </p>
      </div>
    </ModalShell>
  );
}

export default VehicleModal;
