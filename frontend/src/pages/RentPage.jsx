import { useState } from "react";
import { money } from "../utils/format.js";

function RentPage({ days, setDays, vehicles }) {
  const [kind, setKind] = useState("All");
  return (
    <main className="mx-auto min-h-[65vh] max-w-[1400px] px-5 py-10 lg:px-8">
      <span className="rounded bg-red px-3 py-1.5 text-[10px] font-extrabold uppercase">
        Flexible rentals
      </span>
      <h1 className="mt-4 text-4xl font-extrabold">
        Your next trip, <span className="text-red">your way.</span>
      </h1>
      <p className="mt-2 max-w-xl text-slate-400">
        Browse sample vehicles for short trips, weekends or longer stays. Rental
        availability and pricing shown here are demo-only.
      </p>
      <div className="mt-7 flex flex-wrap gap-2">
        {["Daily", "Weekly", "Monthly"].map((d) => (
          <button
            key={d}
            onClick={() => setDays(d)}
            className={`type-btn ${days === d ? "chosen" : ""}`}
          >
            {d}
          </button>
        ))}
        {["All", "Car", "Bike"].map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`type-btn ${kind === k ? "chosen" : ""}`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles
          .filter((v) => kind === "All" || v.type === kind)
          .slice(0, 6)
          .map((v) => (
            <div key={v.id} className="vehicle-card">
              <img
                className="h-48 w-full object-cover"
                src={v.img}
                alt={v.name}
              />
              <div className="p-4">
                <h3 className="font-bold">{v.name}</h3>
                <p className="mt-1 text-xs text-slate-400">
                  {v.type} · {v.city}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-red font-extrabold">
                    {money(
                      Math.round(
                        v.price *
                          (days === "Daily"
                            ? 0.003
                            : days === "Weekly"
                              ? 0.015
                              : 0.045),
                      ),
                    )}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      / {days.toLowerCase()}
                    </span>
                  </span>
                  <button
                    className="rounded-lg bg-red px-4 py-2 text-xs font-bold"
                    onClick={() =>
                      alert(
                        "Rental enquiries need a connected booking backend.",
                      )
                    }
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default RentPage;
