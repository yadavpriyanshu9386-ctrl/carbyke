import { useState } from "react";
import {
  ArrowRight,
  Bike,
  Camera,
  CarFront,
  CheckCircle2,
  CircleHelp,
  FileText,
  MapPin,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { money } from "../utils/format.js";
import SectionHeading from "../components/common/SectionHeading.jsx";

function SellPage({ sellType, setSellType, submitted, setSubmitted }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    fuel: "Petrol",
    transmission: "Manual",
    km: "",
    price: "",
    city: "Delhi NCR",
    phone: "",
    description: "",
  });
  const change = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="mx-auto grid max-w-[1500px] items-center px-5 py-8 md:min-h-[190px] md:grid-cols-2 lg:px-8">
          <div>
            <span className="rounded bg-red px-3 py-1.5 text-[10px] font-extrabold uppercase">
              Sell your vehicle
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Give Your Car or Bike
              <br />a <span className="text-red">New Home</span>
            </h1>
            <p className="mt-2 max-w-md text-sm text-slate-300">
              List your vehicle in just a few steps and reach thousands of
              genuine buyers. Fast, safe and easy!
            </p>
          </div>
          <div className="hero-vehicle hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85"
              alt="Car showcase"
            />
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-[1500px] gap-4 px-4 py-6 lg:grid-cols-[minmax(0,2fr)_minmax(270px,.82fr)] lg:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setStep(4);
          }}
          className="rounded-xl border border-line bg-panel p-4 sm:p-6"
        >
          <div className="mb-6 grid grid-cols-4 gap-2 border-b border-line pb-5">
            {["Vehicle Details", "Condition", "Photos", "Review & Submit"].map(
              (s, i) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setStep(i + 1)}
                  className={`flex items-center gap-2 text-left text-[10px] sm:text-xs ${step === i + 1 ? "text-white" : "text-slate-500"}`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${step === i + 1 ? "border-red bg-red" : "border-slate-500"}`}
                  >
                    {i + 1}
                  </span>
                  <span className="hidden sm:block">{s}</span>
                </button>
              ),
            )}
          </div>
          {submitted ? (
            <div className="py-16 text-center">
              <CheckCircle2 size={52} className="mx-auto text-emerald-400" />
              <h2 className="mt-4 text-2xl font-extrabold">
                Listing draft created!
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
                Your demo listing has been captured in this session. Connect a
                backend to save it permanently or publish it to buyers.
              </p>
              <button
                type="button"
                className="mt-5 rounded-lg bg-red px-5 py-3 text-sm font-bold"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
              >
                Create another listing
              </button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <>
                  <SectionHeading
                    icon={<CarFront />}
                    title="1. Basic Information"
                    subtitle="Tell us about your vehicle so buyers can find your listing easily."
                  />
                  <p className="filter-label">Vehicle Type *</p>
                  <div className="mb-5 mt-2 flex gap-3">
                    {["Car", "Bike"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSellType(t)}
                        className={`type-btn ${sellType === t ? "chosen" : ""}`}
                      >
                        {t === "Car" ? (
                          <CarFront size={17} />
                        ) : (
                          <Bike size={17} />
                        )}{" "}
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="form-grid">
                    {[
                      ["Brand", "brand", "e.g. Hyundai"],
                      ["Model", "model", "e.g. Creta"],
                      ["Manufacturing Year", "year", "2021"],
                    ].map(([l, k, p]) => (
                      <label key={k} className="filter-label">
                        {l} *
                        <input
                          required
                          value={form[k]}
                          onChange={(e) => change(k, e.target.value)}
                          placeholder={p}
                          className="field"
                        />
                      </label>
                    ))}
                    <label className="filter-label">
                      Fuel Type *
                      <select
                        className="field"
                        value={form.fuel}
                        onChange={(e) => change("fuel", e.target.value)}
                      >
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Electric</option>
                        <option>CNG</option>
                      </select>
                    </label>
                    <label className="filter-label">
                      Transmission *
                      <select
                        className="field"
                        value={form.transmission}
                        onChange={(e) => change("transmission", e.target.value)}
                      >
                        <option>Manual</option>
                        <option>Automatic</option>
                      </select>
                    </label>
                    <label className="filter-label">
                      Kilometres Driven *
                      <input
                        required
                        type="number"
                        min="0"
                        className="field"
                        value={form.km}
                        onChange={(e) => change("km", e.target.value)}
                        placeholder="e.g. 35000"
                      />
                    </label>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <SectionHeading
                    icon={<Settings2 />}
                    title="2. Condition & Performance"
                    subtitle="Be accurate and transparent about the current condition."
                  />
                  <div className="form-grid">
                    {[
                      ["Engine condition", "engine"],
                      ["Tyre condition", "tyres"],
                      ["Service history", "service"],
                      ["Accident history", "accident"],
                      ["Number of owners", "owners"],
                      ["RC availability", "rc"],
                    ].map(([l, k]) => (
                      <label key={k} className="filter-label">
                        {l} *
                        <select required className="field">
                          <option value="">Select {l.toLowerCase()}</option>
                          {[
                            "Excellent",
                            "Good",
                            "Average",
                            "Needs attention",
                            "Available",
                            "Not available",
                            "No accidents",
                            "1st Owner",
                            "2nd Owner",
                            "3rd Owner+",
                            "Full service history",
                            "Partial service history",
                          ].map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>
                  <label className="filter-label mt-5">
                    Scratches, dents or other details
                    <textarea
                      className="field min-h-28 resize-y"
                      placeholder="Describe any visible damage or issues..."
                    />
                  </label>
                </>
              )}
              {step === 3 && (
                <>
                  <SectionHeading
                    icon={<Camera />}
                    title="3. Vehicle Photos"
                    subtitle="Clear photos help buyers make a confident decision."
                  />
                  <label className="mt-5 flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-500 bg-[#061019] p-6 text-center hover:border-red">
                    <Camera size={30} className="text-red" />
                    <span className="mt-3 font-semibold">
                      Choose photos from your device
                    </span>
                    <span className="mt-1 text-xs text-slate-400">
                      JPG, PNG · Front, back, sides and interior recommended
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="mt-4 max-w-full text-xs text-slate-400"
                    />
                  </label>
                  <p className="mt-3 text-xs text-slate-500">
                    Demo note: photos are not uploaded to a server. A
                    backend/storage service is needed for permanent uploads.
                  </p>
                </>
              )}
              {step === 4 && (
                <>
                  <SectionHeading
                    icon={<FileText />}
                    title="4. Price, Location & Review"
                    subtitle="Review the details before creating your demo listing."
                  />
                  <div className="form-grid">
                    <label className="filter-label">
                      Expected Price (₹) *
                      <input
                        required
                        type="number"
                        min="1"
                        className="field"
                        value={form.price}
                        onChange={(e) => change("price", e.target.value)}
                        placeholder="e.g. 450000"
                      />
                    </label>
                    <label className="filter-label">
                      City / Locality *
                      <select
                        className="field"
                        value={form.city}
                        onChange={(e) => change("city", e.target.value)}
                      >
                        {[
                          "Delhi NCR",
                          "Gurugram",
                          "Noida",
                          "Faridabad",
                          "Other",
                        ].map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </label>
                    <label className="filter-label">
                      Contact Number *
                      <input
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        className="field"
                        value={form.phone}
                        onChange={(e) => change("phone", e.target.value)}
                        placeholder="10-digit mobile number"
                      />
                    </label>
                    <label className="filter-label">
                      Description
                      <textarea
                        className="field min-h-24"
                        value={form.description}
                        onChange={(e) => change("description", e.target.value)}
                        placeholder="Vehicle history, features and other details"
                      />
                    </label>
                  </div>
                  <div className="mt-5 rounded-lg border border-line p-4 text-sm">
                    <p>
                      <span className="text-slate-500">Vehicle:</span>{" "}
                      {form.brand || "—"} {form.model || ""} (
                      {form.year || "Year"}) · {sellType}
                    </p>
                    <p className="mt-2">
                      <span className="text-slate-500">Price:</span>{" "}
                      {form.price ? money(Number(form.price)) : "Not set"} ·{" "}
                      {form.city}
                    </p>
                  </div>
                </>
              )}
              <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-5">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="rounded-lg border border-line px-5 py-3 text-sm"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="rounded-lg bg-red px-6 py-3 text-sm font-bold"
                  >
                    Next step <ArrowRight className="ml-2 inline" size={15} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-lg bg-red px-6 py-3 text-sm font-bold"
                  >
                    Create Listing{" "}
                    <CheckCircle2 className="ml-2 inline" size={15} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(true);
                    setStep(4);
                  }}
                  className="rounded-lg border border-red px-5 py-3 text-sm"
                >
                  Save as Draft
                </button>
              </div>
            </>
          )}
        </form>
        <aside className="space-y-4">
          <div className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-4 flex items-center gap-2 font-bold">
              <CircleHelp className="text-red" /> Quick Tips
            </h3>
            {[
              "Be honest about the vehicle’s condition.",
              "Upload clear and recent photos.",
              "Mention all details accurately.",
              "A complete listing gets more enquiries.",
              "Never share OTPs or sensitive information.",
            ].map((t) => (
              <p key={t} className="mb-3 flex gap-2 text-sm text-slate-300">
                <CheckCircle2 size={17} className="shrink-0 text-red" />
                {t}
              </p>
            ))}
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-4 font-bold">Why Sell With Us?</h3>
            {[
              ["Reach Genuine Buyers", "Connect with interested buyers"],
              ["Safe & Secure", "Verify documents before a deal"],
              ["Easy Process", "Create a listing in minutes"],
              ["Best Value", "Set the price that works for you"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="flex gap-3 border-b border-line py-3 last:border-0"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-red">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{a}</p>
                  <p className="mt-1 text-xs text-slate-400">{b}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <h3 className="font-bold">Your Listing Preview</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-line">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                alt="Vehicle preview"
                className="h-40 w-full object-cover"
              />
            </div>
            <p className="mt-3 font-bold">
              {form.brand || "Brand"} {form.model || "Model"}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {form.year || "Year"} · {form.fuel} · {form.transmission}
            </p>
            <p className="mt-3 text-xl font-extrabold text-red">
              {form.price ? money(Number(form.price)) : "₹—"}
            </p>
            <p className="mt-2 flex items-center gap-1 text-xs text-slate-400">
              <MapPin size={13} />
              {form.city}
            </p>
          </div>
        </aside>
      </main>
    </>
  );
}

export default SellPage;
