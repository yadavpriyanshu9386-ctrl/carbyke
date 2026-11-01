import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Bike,
  Camera,
  CarFront,
  CheckCircle2,
  CircleHelp,
  FileText,
  MapPin,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  BadgeCheck,
  Zap,
} from "lucide-react";

import { money } from "../utils/format.js";
import SectionHeading from "../components/common/SectionHeading.jsx";

import VideoBackground from "../components/Background/VideoBackground";
import homeVideo from "../components/Background/Home.bg.mp4";

function SellPage({ sellType, setSellType, submitted, setSubmitted }) {
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState([]);

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
    engine: "",
    tyres: "",
    service: "",
    accident: "",
    owners: "",
    rc: "",
  });

  const change = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const steps = [
    { title: "Vehicle Details", icon: CarFront },
    { title: "Condition", icon: Settings2 },
    { title: "Photos", icon: Camera },
    { title: "Review & Submit", icon: FileText },
  ];

  const quickTips = [
    "Be honest about the vehicle's condition.",
    "Upload clear and recent photos.",
    "Mention all details accurately.",
    "A complete listing gets more enquiries.",
    "Never share OTPs or sensitive information.",
  ];

  const benefits = [
    ["Reach Genuine Buyers", "Connect with interested buyers", ShieldCheck],
    ["Safe & Secure", "Verify documents before a deal", BadgeCheck],
    ["Easy Process", "Create a listing in minutes", Zap],
    ["Best Value", "Set the price that works for you", Sparkles],
  ];

  const handlePhotos = (e) => {
    setPhotos(Array.from(e.target.files || []));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(4);
  };

  const resetListing = () => {
    setSubmitted(false);
    setStep(1);
    setPhotos([]);
    setForm({
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
      engine: "",
      tyres: "",
      service: "",
      accident: "",
      owners: "",
      rc: "",
    });
  };

  const conditionFields = [
    {
      label: "Engine condition",
      key: "engine",
      options: ["Excellent", "Good", "Average", "Needs attention"],
    },
    {
      label: "Tyre condition",
      key: "tyres",
      options: ["Excellent", "Good", "Average", "Needs attention"],
    },
    {
      label: "Service history",
      key: "service",
      options: [
        "Full service history",
        "Partial service history",
        "Not available",
      ],
    },
    {
      label: "Accident history",
      key: "accident",
      options: ["No accidents", "Minor accidents", "Major accidents"],
    },
    {
      label: "Number of owners",
      key: "owners",
      options: ["1st Owner", "2nd Owner", "3rd Owner+"],
    },
    {
      label: "RC availability",
      key: "rc",
      options: ["Available", "Not available"],
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <VideoBackground src={homeVideo} />

      <div className="relative z-10">
        {/* HERO + FOUR CARDS */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-red-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-[1500px] items-center gap-8 px-5 py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-14">
            {/* HERO CONTENT */}
            <div className="sell-enter">
              <div className="sell-copy inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-red-300 backdrop-blur-xl sm:text-xs">
                <Sparkles size={14} />
                CARBYKE SELL EXPERIENCE
              </div>

              {/* ANIMATED HEADING */}
              <div className="animated-heading-wrap">
                <div className="sell-copy">
                  <h1 className="premium-heading mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                    SELL YOUR VEHICLES
                    <br />
                    WITH CONFIDENCE
                  </h1>
                </div>
              </div>

              <p className="sell-copy mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Your vehicle deserves the right buyer. Create your listing,
                showcase your vehicle and connect with potential buyers through
                CARBYKE.
              </p>

              <div className="sell-copy mt-7 flex flex-wrap gap-3">
                <a
                  href="#sell-form"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 text-sm font-extrabold shadow-[0_10px_40px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(220,38,38,0.45)]"
                >
                  Start Selling
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-slate-200 backdrop-blur-xl">
                  <ShieldCheck size={18} className="text-red-400" />
                  Simple & Secure
                </div>
              </div>

              <div className="sell-copy mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                {["Easy listing", "Vehicle showcase", "Buyer connections"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-red-400" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* FOUR CARDS ON HERO RIGHT SIDE */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* QUICK TIPS */}
              <div className="sell-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/75 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_15px_45px_rgba(220,38,38,0.10)]">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/10 blur-[65px]" />

                <div className="relative flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <CircleHelp size={20} />
                  </span>
                  <h3 className="text-base font-black">Quick Tips</h3>
                </div>

                <div className="relative mt-4 space-y-2.5">
                  {quickTips.slice(0, 4).map((tip, i) => (
                    <div
                      key={tip}
                      className="flex gap-2 text-xs leading-5 text-slate-300 transition-all duration-300 hover:translate-x-1"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-red-400"
                      />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* WHY CARBYKE */}
              <div className="sell-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/75 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_15px_45px_rgba(220,38,38,0.10)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <ShieldCheck size={20} />
                  </span>
                  <h3 className="text-base font-black">
                    Why Sell With{" "}
                    <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      CARBYKE?
                    </span>
                  </h3>
                </div>

                <div className="mt-3 space-y-2">
                  {benefits.map(([title, description, Icon]) => (
                    <div
                      key={title}
                      className="flex items-start gap-2 rounded-lg py-1 transition-all duration-300 hover:translate-x-1"
                    >
                      <Icon
                        size={15}
                        className="mt-0.5 shrink-0 text-red-400"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">{title}</p>
                        <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LISTING PREVIEW */}
              <div className="sell-card group overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/75 p-4 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_15px_45px_rgba(220,38,38,0.10)]">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-black">Your Listing Preview</h3>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
                    Live Preview
                  </span>
                </div>

                <div className="relative mt-3 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85"
                    alt="Vehicle preview"
                    className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <span className="absolute bottom-2 left-3 rounded-lg border border-white/20 bg-black/50 px-3 py-1 text-[9px] font-bold backdrop-blur-md">
                    {sellType}
                  </span>
                </div>

                <h4 className="mt-3 text-sm font-black">
                  {form.brand || "Brand"} {form.model || "Model"}
                </h4>

                <p className="mt-1 text-[10px] text-slate-400">
                  {form.year || "Year"} · {form.fuel} · {form.transmission}
                </p>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <p className="text-lg font-black text-red-400">
                    {form.price ? money(Number(form.price)) : "₹—"}
                  </p>
                  <p className="flex items-center gap-1 text-[10px] text-slate-400">
                    <MapPin size={12} className="text-red-400" />
                    {form.city}
                  </p>
                </div>
              </div>

              {/* READY TO DEAL */}
              <div className="sell-card relative flex flex-col justify-between overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/70 via-black/90 to-black p-5 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_15px_45px_rgba(220,38,38,0.12)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-500/20 blur-[60px]" />

                <div className="relative">
                  <Sparkles size={23} className="text-red-400" />
                  <h3 className="mt-3 text-lg font-black">
                    Ready to make a deal?
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Your next buyer could be just one listing away.
                  </p>
                </div>

                <a
                  href="#sell-form"
                  className="relative mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold text-red-300 transition-all duration-300 hover:gap-3 hover:text-white"
                >
                  Start your listing <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FULL WIDTH LISTING FORM */}
        <section
          id="sell-form"
          className="relative mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-10 lg:py-12"
        >
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div className="sell-copy">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-red-400">
                <Sparkles size={14} />
                Let's get started
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                List Your{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-300 to-red-500 bg-clip-text text-transparent">
                  Vehicle
                </span>
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Complete the details below to create your vehicle listing.
              </p>
            </div>

            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.07] px-4 py-3 text-xs text-red-300">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Simple, secure and easy listing
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090909]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 hover:border-red-500/20 sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-orange-600/[0.06] blur-[100px]" />

            {/* PROGRESS */}
            <div className="relative mb-9">
              <div className="mb-5 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-red-400">
                    Listing progress
                  </p>
                  <p className="mt-1 text-lg font-black">
                    Step {step}{" "}
                    <span className="text-sm font-medium text-slate-500">
                      of 4
                    </span>
                  </p>
                </div>

                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-300">
                  {Math.round((step / 4) * 100)}% completed
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-400 to-orange-300 transition-all duration-700 ease-out"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const active = step === i + 1;
                  const completed = step > i + 1;

                  return (
                    <button
                      type="button"
                      key={s.title}
                      onClick={() => setStep(i + 1)}
                      className="group flex flex-col items-center gap-2 text-center"
                    >
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-xl border transition-all duration-500 ${
                          active
                            ? "scale-110 border-red-500 bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[0_0_25px_rgba(220,38,38,0.35)]"
                            : completed
                              ? "border-red-500/50 bg-red-500/15 text-red-400"
                              : "border-white/10 bg-white/5 text-slate-500 group-hover:border-red-500/40 group-hover:text-red-300"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 size={19} />
                        ) : (
                          <Icon size={19} />
                        )}
                      </span>

                      <span
                        className={`hidden text-[10px] font-bold transition-colors duration-300 sm:block ${
                          active ? "text-white" : "text-slate-500"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {submitted ? (
              <div className="relative animate-[fadeUp_.6s_ease-out_both] py-14 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_50px_rgba(52,211,153,0.12)]">
                  <CheckCircle2 size={48} className="text-emerald-400" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[3px] text-emerald-400">
                  Successfully created
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Listing Draft Created!
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400">
                  Your demo listing has been captured in this session. Connect a
                  backend to save it permanently or publish it to buyers.
                </p>

                <button
                  type="button"
                  onClick={resetListing}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-7 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/30"
                >
                  Create Another Listing
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <div
                key={step}
                className="relative animate-[fadeUp_.45s_ease-out_both]"
              >
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <SectionHeading
                      icon={<CarFront />}
                      title="1. Basic Information"
                      subtitle="Tell us about your vehicle so buyers can find your listing easily."
                    />

                    <p className="filter-label mt-7">Vehicle Type *</p>

                    <div className="mb-7 mt-3 grid max-w-xl grid-cols-2 gap-3">
                      {["Car", "Bike"].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSellType(type)}
                          className={`group flex items-center justify-center gap-3 rounded-2xl border p-5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                            sellType === type
                              ? "border-red-500 bg-gradient-to-br from-red-600/20 to-red-950/30 text-white shadow-[0_0_25px_rgba(220,38,38,0.12)]"
                              : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-red-500/40 hover:text-white"
                          }`}
                        >
                          {type === "Car" ? (
                            <CarFront size={24} />
                          ) : (
                            <Bike size={24} />
                          )}
                          {type}
                          {sellType === type && (
                            <CheckCircle2 size={17} className="text-red-400" />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="form-grid">
                      {[
                        ["Brand", "brand", "e.g. Hyundai"],
                        ["Model", "model", "e.g. Creta"],
                        ["Manufacturing Year", "year", "2021"],
                      ].map(([label, key, placeholder]) => (
                        <label key={key} className="filter-label">
                          {label} *
                          <input
                            required
                            value={form[key]}
                            onChange={(e) => change(key, e.target.value)}
                            placeholder={placeholder}
                            className="field transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/15"
                          />
                        </label>
                      ))}

                      <label className="filter-label">
                        Fuel Type *
                        <select
                          required
                          className="field transition-all duration-300 focus:border-red-500"
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
                          required
                          className="field transition-all duration-300 focus:border-red-500"
                          value={form.transmission}
                          onChange={(e) =>
                            change("transmission", e.target.value)
                          }
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
                          className="field transition-all duration-300 focus:border-red-500"
                          value={form.km}
                          onChange={(e) => change("km", e.target.value)}
                          placeholder="e.g. 35000"
                        />
                      </label>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <SectionHeading
                      icon={<Settings2 />}
                      title="2. Condition & Performance"
                      subtitle="Be accurate and transparent about the current condition."
                    />

                    <div className="form-grid mt-7">
                      {conditionFields.map(({ label, key, options }) => (
                        <label key={key} className="filter-label">
                          {label} *
                          <select
                            required
                            className="field transition-all duration-300 focus:border-red-500"
                            value={form[key]}
                            onChange={(e) => change(key, e.target.value)}
                          >
                            <option value="">
                              Select {label.toLowerCase()}
                            </option>
                            {options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>
                      ))}
                    </div>

                    <label className="filter-label mt-6 block">
                      Additional Details
                      <textarea
                        value={form.description}
                        onChange={(e) => change("description", e.target.value)}
                        className="field min-h-32 resize-y transition-all duration-300 focus:border-red-500"
                        placeholder="Describe scratches, dents or any other details..."
                      />
                    </label>

                    <div className="mt-5 rounded-xl border border-red-500/15 bg-red-500/[0.06] p-4">
                      <p className="flex items-center gap-2 text-xs font-bold text-red-300">
                        <ShieldCheck size={16} />
                        Honest information builds buyer confidence.
                      </p>
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <SectionHeading
                      icon={<Camera />}
                      title="3. Vehicle Photos"
                      subtitle="Clear photos help buyers make a confident decision."
                    />

                    <label className="group mt-7 flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-7 text-center transition-all duration-500 hover:border-red-500/70 hover:bg-red-500/[0.05]">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Upload size={28} />
                      </div>

                      <span className="mt-5 text-lg font-bold transition-colors group-hover:text-red-300">
                        Choose photos from your device
                      </span>

                      <span className="mt-2 text-xs text-slate-400">
                        JPG, PNG · Front, back, sides and interior recommended
                      </span>

                      <span className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-3 text-xs font-bold text-red-300 transition-all group-hover:bg-red-500/20">
                        Browse Files
                      </span>

                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotos}
                        className="sr-only"
                      />
                    </label>

                    {photos.length > 0 && (
                      <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                        <p className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                          <CheckCircle2 size={17} />
                          {photos.length} photo(s) selected
                        </p>

                        <div className="mt-3 space-y-1">
                          {photos.map((photo, i) => (
                            <p
                              key={`${photo.name}-${i}`}
                              className="truncate text-xs text-slate-400"
                            >
                              {photo.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="mt-4 text-xs leading-6 text-slate-500">
                      Demo note: photos are selected locally and are not
                      uploaded to a server. A backend/storage service is needed
                      for permanent uploads.
                    </p>
                  </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <>
                    <SectionHeading
                      icon={<FileText />}
                      title="4. Price, Location & Review"
                      subtitle="Review the details before creating your demo listing."
                    />

                    <div className="form-grid mt-7">
                      <label className="filter-label">
                        Expected Price (₹) *
                        <input
                          required
                          type="number"
                          min="1"
                          className="field transition-all duration-300 focus:border-red-500"
                          value={form.price}
                          onChange={(e) => change("price", e.target.value)}
                          placeholder="e.g. 450000"
                        />
                      </label>

                      <label className="filter-label">
                        City / Locality *
                        <select
                          required
                          className="field transition-all duration-300 focus:border-red-500"
                          value={form.city}
                          onChange={(e) => change("city", e.target.value)}
                        >
                          {[
                            "Delhi NCR",
                            "Gurugram",
                            "Noida",
                            "Faridabad",
                            "Other",
                          ].map((city) => (
                            <option key={city}>{city}</option>
                          ))}
                        </select>
                      </label>

                      <label className="filter-label">
                        Contact Number *
                        <input
                          required
                          type="tel"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="field transition-all duration-300 focus:border-red-500"
                          value={form.phone}
                          onChange={(e) => change("phone", e.target.value)}
                          placeholder="10-digit mobile number"
                        />
                      </label>

                      <label className="filter-label">
                        Description
                        <textarea
                          className="field min-h-28 resize-y transition-all duration-300 focus:border-red-500"
                          value={form.description}
                          onChange={(e) =>
                            change("description", e.target.value)
                          }
                          placeholder="Vehicle history, features and other details"
                        />
                      </label>
                    </div>

                    <div className="mt-7 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/30 to-black/40 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[2px] text-red-300">
                          Listing summary
                        </p>
                        <BadgeCheck size={20} className="text-red-400" />
                      </div>

                      <h3 className="mt-4 text-xl font-black">
                        {form.brand || "Brand"} {form.model || "Model"}
                      </h3>

                      <p className="mt-2 text-xs text-slate-400">
                        {form.year || "Year"} · {sellType} · {form.fuel} ·{" "}
                        {form.transmission}
                      </p>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-white/10 pt-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-slate-500">
                            Expected Price
                          </p>
                          <p className="mt-1 text-2xl font-black text-red-400">
                            {form.price ? money(Number(form.price)) : "₹—"}
                          </p>
                        </div>

                        <p className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin size={14} />
                          {form.city}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* FORM NAVIGATION */}
                <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
                  <div>
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-red-500/40 hover:bg-white/10 hover:text-white"
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(true);
                        setStep(4);
                      }}
                      className="rounded-xl border border-red-500/30 px-5 py-3.5 text-sm font-bold text-red-300 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10"
                    >
                      Save as Draft
                    </button>

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-extrabold shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-600/30"
                      >
                        Next Step
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-extrabold shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-600/30"
                      >
                        Create Listing
                        <CheckCircle2
                          size={17}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 pb-12 sm:px-6 lg:px-10">
          <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/70 via-black/90 to-red-950/50 px-6 py-10 text-center backdrop-blur-xl sm:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-red-600/20 blur-[80px]" />

            <div className="relative sell-copy">
              <p className="text-xs font-bold uppercase tracking-[3px] text-red-400">
                CARBYKE Marketplace
              </p>

              <div className="animated-heading-wrap">
                <div className="sell-copy">
                  <h2 className="premium-heading mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-1xl lg:text-4xl">
                    Your Vehicle. Your Price. Your Deal.
                  </h2>
                </div>
              </div>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Create your listing and take the first step towards finding the
                right buyer.
              </p>

              <a
                href="#sell-form"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_10px_35px_rgba(220,38,38,0.3)]"
              >
                Sell Your Vehicle
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ANIMATIONS */}
      <style>{`
  @keyframes premiumReveal {
    0% {
      opacity: 0;
      transform: translateY(25px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  @keyframes premiumGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .sell-copy {
    animation: premiumReveal 1s cubic-bezier(.16,1,.3,1) both;
  }

  .sell-card {
    animation: premiumReveal .9s cubic-bezier(.16,1,.3,1) both;
  }

  .animate-gradient {
    background-size: 300% 300% !important;
    animation: premiumGradient 5s ease infinite !important;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .premium-heading {
    background: linear-gradient(
      100deg,
      #ffffff 0%,
      #fca5a5 25%,
      #ef4444 50%,
      #fdba74 75%,
      #ffffff 100%
    );
    background-size: 300% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: premiumGradient 6s ease infinite;
  }

  .premium-text {
    transition: color .35s ease, transform .35s ease, text-shadow .35s ease;
  }

  .premium-text:hover {
    color: #ffffff;
    transform: translateX(4px);
    text-shadow: 0 0 15px rgba(248,113,113,.35);
  }

  @media (prefers-reduced-motion: reduce) {
    .sell-copy, .sell-card, .animate-gradient, .premium-heading {
      animation: none !important;
    }
  }
`}</style>
    </main>
  );
}

export default SellPage;
