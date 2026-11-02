import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bike,
  CarFront,
  CheckCircle2,
  ChevronRight,
  ImagePlus,
  MapPin,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

const initialForm = {
  type: "Car",
  brand: "",
  model: "",
  year: "",
  fuel: "Petrol",
  transmission: "Manual",
  city: "",
  dailyPrice: "",
  weeklyPrice: "",
  monthlyPrice: "",
  ownerName: "",
  ownerContact: "",
  description: "",
};

const bubbles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  size: 12 + ((i * 17) % 55),
  left: `${(i * 37) % 100}%`,
  delay: `${(i % 8) * -1.7}s`,
  duration: `${13 + (i % 9) * 2}s`,
}));

function ListRent({ onBack, onSubmitListing }) {
  const [form, setForm] = useState(initialForm);
  const [photos, setPhotos] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return () => photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
  }, [photos]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handlePhotos = (event) => {
    const files = Array.from(event.target.files || []);
    const remaining = Math.max(0, 5 - photos.length);
    const selected = files.slice(0, remaining);

    const newPhotos = selected
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

    setPhotos((prev) => [...prev, ...newPhotos]);
    event.target.value = "";
  };

  const removePhoto = (index) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const validate = () => {
    const next = {};

    if (!form.brand.trim()) next.brand = "Brand is required";
    if (!form.model.trim()) next.model = "Model is required";
    if (
      !form.year ||
      Number(form.year) < 1990 ||
      Number(form.year) > new Date().getFullYear() + 1
    ) {
      next.year = "Enter a valid manufacturing year";
    }
    if (!form.city.trim()) next.city = "City is required";
    if (!form.dailyPrice || Number(form.dailyPrice) <= 0) {
      next.dailyPrice = "Enter a valid daily rent";
    }
    if (!form.ownerName.trim()) next.ownerName = "Owner name is required";
    if (!/^[6-9]\d{9}$/.test(form.ownerContact)) {
      next.ownerContact = "Enter a valid 10-digit Indian mobile number";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const listing = {
      ...form,
      year: Number(form.year),
      dailyPrice: Number(form.dailyPrice),
      weeklyPrice: Number(form.weeklyPrice || 0),
      monthlyPrice: Number(form.monthlyPrice || 0),
      photos: photos.map((photo) => photo.file),
      createdAt: new Date().toISOString(),
    };

    onSubmitListing?.(listing);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-[#111116]/90 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  const labelClass =
    "text-xs font-bold uppercase tracking-[.13em] text-slate-300";

  const errorText = (key) =>
    errors[key] ? (
      <span className="mt-1 block text-xs text-rose-400">{errors[key]}</span>
    ) : null;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#07070a] text-white">
      <style>{`
        @keyframes lrFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(25px, -65px, 0) scale(1.12); }
        }
        @keyframes lrGlow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .75; transform: scale(1.12); }
        }
        @keyframes lrGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes lrEnter {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lrShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .lr-bubble {
          position: absolute;
          bottom: -100px;
          border: 1px solid rgba(255, 75, 105, .24);
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 25%, rgba(255,255,255,.12), rgba(220,38,70,.035) 55%, transparent 72%);
          box-shadow: inset 0 0 22px rgba(220,38,70,.07), 0 0 25px rgba(220,38,70,.06);
          animation: lrFloat linear infinite;
          pointer-events: none;
        }
        .lr-gradient {
          background: linear-gradient(100deg, #fff 5%, #ffb4c1 35%, #ff3158 65%, #fff 95%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: lrGradient 6s ease infinite;
        }
        .lr-enter { animation: lrEnter .7s ease both; }
        .lr-panel {
          border: 1px solid rgba(255,255,255,.09);
          background: linear-gradient(145deg, rgba(25,17,23,.88), rgba(10,10,15,.91));
          box-shadow: 0 25px 80px rgba(0,0,0,.32), inset 0 1px rgba(255,255,255,.035);
          backdrop-filter: blur(20px);
        }
        .lr-button {
          background: linear-gradient(100deg, #991b1b, #ef244b, #991b1b);
          background-size: 200% auto;
          transition: background-position .5s ease, transform .3s ease, box-shadow .3s ease;
        }
        .lr-button:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(220,38,70,.3);
        }
        .lr-shine {
          background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,.09) 50%, transparent 80%);
          background-size: 200% 100%;
          animation: lrShine 5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .lr-bubble, .lr-gradient, .lr-enter, .lr-shine { animation: none !important; }
          .lr-button { transition: none !important; }
        }
      `}</style>

      {/* Animated background bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-800/20 blur-[130px]" />
        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-rose-700/15 blur-[150px]" />
        <div className="absolute bottom-0 left-[35%] h-80 w-80 rounded-full bg-red-950/35 blur-[120px]" />
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="lr-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
        >
          <ArrowLeft
            size={17}
            className="transition group-hover:-translate-x-1"
          />
          Back to Rent
        </button>

        {!submitted ? (
          <>
            {/* Hero */}
            <section className="lr-enter relative py-12 text-center sm:py-16">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] text-rose-300">
                <Sparkles size={14} />
                CARBYKE Partner Program
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Turn Your Ride
                <br />
                Into <span className="lr-gradient">Your Income.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                List your car or bike on CARBYKE and make it available for rent.
                Share your vehicle details and start your listing journey.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-slate-300">
                  <ShieldCheck
                    className="mr-2 inline text-rose-400"
                    size={15}
                  />
                  Owner-first listing
                </span>
                <span className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-slate-300">
                  <Sparkles className="mr-2 inline text-rose-400" size={15} />
                  Simple listing process
                </span>
              </div>
            </section>

            <form onSubmit={handleSubmit} className="lr-enter space-y-6">
              {/* Vehicle type */}
              <section className="lr-panel relative overflow-hidden rounded-3xl p-5 sm:p-8">
                <div className="lr-shine pointer-events-none absolute inset-0" />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/15 text-rose-400">
                      <CarFront size={22} />
                    </span>
                    <div>
                      <h2 className="text-xl font-black">
                        Choose Your Vehicle
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        What do you want to list?
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        value: "Car",
                        icon: CarFront,
                        title: "List a Car",
                        sub: "Sedan, SUV, hatchback & more",
                      },
                      {
                        value: "Bike",
                        icon: Bike,
                        title: "List a Bike",
                        sub: "Scooter, sports & commuter bikes",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = form.type === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => update("type", item.value)}
                          className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 ${
                            active
                              ? "border-red-500/80 bg-red-500/10 shadow-[0_0_30px_rgba(220,38,70,.12)]"
                              : "border-white/10 bg-black/20 hover:border-red-500/40"
                          }`}
                        >
                          <span
                            className={`grid h-14 w-14 place-items-center rounded-2xl transition ${active ? "bg-red-600 text-white" : "bg-white/5 text-slate-400 group-hover:text-rose-400"}`}
                          >
                            <Icon size={28} />
                          </span>
                          <span>
                            <span className="block text-base font-extrabold">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-xs text-slate-500">
                              {item.sub}
                            </span>
                          </span>
                          {active && (
                            <CheckCircle2
                              className="ml-auto text-rose-400"
                              size={20}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Vehicle information */}
              <section className="lr-panel rounded-3xl p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-500/15 text-rose-400">
                    <Sparkles size={21} />
                  </span>
                  <div>
                    <h2 className="text-xl font-black">Vehicle Information</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Tell renters about your vehicle
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <label className={labelClass}>
                    Brand / Company *
                    <input
                      className={inputClass}
                      value={form.brand}
                      onChange={(e) => update("brand", e.target.value)}
                      placeholder="e.g. Tata, Honda"
                    />
                    {errorText("brand")}
                  </label>

                  <label className={labelClass}>
                    Model *
                    <input
                      className={inputClass}
                      value={form.model}
                      onChange={(e) => update("model", e.target.value)}
                      placeholder="e.g. Nexon, Activa"
                    />
                    {errorText("model")}
                  </label>

                  <label className={labelClass}>
                    Manufacturing Year *
                    <input
                      className={inputClass}
                      type="number"
                      min="1990"
                      max={new Date().getFullYear() + 1}
                      value={form.year}
                      onChange={(e) => update("year", e.target.value)}
                      placeholder="e.g. 2023"
                    />
                    {errorText("year")}
                  </label>

                  <label className={labelClass}>
                    Fuel Type
                    <select
                      className={inputClass}
                      value={form.fuel}
                      onChange={(e) => update("fuel", e.target.value)}
                    >
                      {["Petrol", "Diesel", "Electric", "CNG", "Hybrid"].map(
                        (v) => (
                          <option key={v}>{v}</option>
                        ),
                      )}
                    </select>
                  </label>

                  <label className={labelClass}>
                    Transmission
                    <select
                      className={inputClass}
                      value={form.transmission}
                      onChange={(e) => update("transmission", e.target.value)}
                    >
                      {["Manual", "Automatic"].map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </label>

                  <label className={labelClass}>
                    City *
                    <span className="relative block">
                      <MapPin
                        size={16}
                        className="absolute left-3 top-6 text-rose-400"
                      />
                      <input
                        className={`${inputClass} pl-9`}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        placeholder="e.g. Delhi, Patna"
                      />
                    </span>
                    {errorText("city")}
                  </label>
                </div>

                <label className={`${labelClass} mt-5 block`}>
                  Vehicle Description
                  <textarea
                    className={`${inputClass} min-h-28 resize-y`}
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder="Mention condition, features, mileage and anything renters should know..."
                    rows={4}
                  />
                </label>
              </section>

              {/* Photos */}
              <section className="lr-panel rounded-3xl p-5 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/15 text-rose-400">
                    <ImagePlus size={22} />
                  </span>
                  <div>
                    <h2 className="text-xl font-black">Vehicle Photos</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Add up to 5 clear photos of your vehicle
                    </p>
                  </div>
                </div>

                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-red-500/35 bg-red-500/[.04] px-5 py-9 text-center transition hover:border-red-400 hover:bg-red-500/[.08]">
                  <span className="mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-red-500/15 text-rose-400 transition group-hover:scale-110">
                    <Upload size={25} />
                  </span>
                  <span className="text-sm font-extrabold">
                    Click to upload vehicle photos
                  </span>
                  <span className="mt-2 text-xs text-slate-500">
                    JPG, PNG or WEBP · Maximum 5 photos
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handlePhotos}
                    disabled={photos.length >= 5}
                  />
                </label>

                {photos.length > 0 && (
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {photos.map((photo, index) => (
                      <div
                        key={photo.preview}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
                      >
                        <img
                          src={photo.preview}
                          alt={`Vehicle ${index + 1}`}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/75 text-white hover:bg-red-600"
                          aria-label="Remove photo"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Pricing */}
              <section className="lr-panel rounded-3xl p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/15 text-rose-400 text-xl font-black">
                    ₹
                  </span>
                  <div>
                    <h2 className="text-xl font-black">
                      Set Your Rental Price
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      You can add weekly and monthly prices too
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    ["Daily Rent *", "dailyPrice", "e.g. 1500"],
                    ["Weekly Rent", "weeklyPrice", "e.g. 9000"],
                    ["Monthly Rent", "monthlyPrice", "e.g. 30000"],
                  ].map(([label, key, placeholder]) => (
                    <label key={key} className={labelClass}>
                      {label}
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400">
                          ₹
                        </span>
                        <input
                          className={`${inputClass} pl-9`}
                          type="number"
                          min="0"
                          value={form[key]}
                          onChange={(e) => update(key, e.target.value)}
                          placeholder={placeholder}
                        />
                      </div>
                      {errorText(key)}
                    </label>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Tip: Keep your price competitive and clearly mention any extra
                  charges in the description.
                </p>
              </section>

              {/* Owner details */}
              <section className="lr-panel rounded-3xl p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-500/15 text-rose-400">
                    <ShieldCheck size={22} />
                  </span>
                  <div>
                    <h2 className="text-xl font-black">Owner Details</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      How can interested renters contact you?
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Owner Name *
                    <input
                      className={inputClass}
                      value={form.ownerName}
                      onChange={(e) => update("ownerName", e.target.value)}
                      placeholder="Enter your name"
                    />
                    {errorText("ownerName")}
                  </label>

                  <label className={labelClass}>
                    Mobile Number *
                    <input
                      className={inputClass}
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={form.ownerContact}
                      onChange={(e) =>
                        update(
                          "ownerContact",
                          e.target.value.replace(/\D/g, "").slice(0, 10),
                        )
                      }
                      placeholder="10-digit mobile number"
                    />
                    {errorText("ownerContact")}
                  </label>
                </div>
                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Your contact details should be accurate. Contact visibility
                  and verification will be handled when the backend is
                  connected.
                </p>
              </section>

              {/* Submit */}
              <div className="lr-panel flex flex-col items-center justify-between gap-5 rounded-3xl p-5 sm:flex-row sm:p-7">
                <div>
                  <p className="text-sm font-extrabold">
                    Ready to list your vehicle?
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Review your details before submitting.
                  </p>
                </div>
                <button
                  type="submit"
                  className="lr-button inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-sm font-black text-white sm:w-auto"
                >
                  Submit Vehicle Listing <ChevronRight size={18} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <section className="lr-panel lr-enter mx-auto mt-16 max-w-2xl rounded-3xl p-8 text-center sm:p-12">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-green-400/30 bg-green-400/10 text-green-400">
              <CheckCircle2 size={42} />
            </div>
            <p className="mt-7 text-xs font-black uppercase tracking-[.25em] text-rose-400">
              CARBYKE Listing
            </p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              Details Submitted!
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Your vehicle details have passed the form validation. Permanent
              listing, owner verification and renter enquiries will be enabled
              after backend integration.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Your vehicle
              </p>
              <p className="mt-2 text-lg font-black">
                {form.brand} {form.model}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {form.type} · {form.year} · {form.city}
              </p>
              <p className="mt-3 text-xl font-black text-rose-400">
                ₹{Number(form.dailyPrice).toLocaleString("en-IN")}{" "}
                <span className="text-xs font-medium text-slate-500">
                  / day
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="lr-button mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-black"
            >
              <ArrowLeft size={17} /> Back to Rent Page
            </button>
          </section>
        )}

        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-[10px] tracking-wider text-slate-600">
          © {new Date().getFullYear()} CARBYKE · DRIVE YOUR WAY
        </footer>
      </div>
    </main>
  );
}

export default ListRent;
