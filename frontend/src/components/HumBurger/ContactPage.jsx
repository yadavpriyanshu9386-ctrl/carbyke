import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ArrowUpRight,
  CarFront,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle2,
  Sparkles,
  Headphones,
} from "lucide-react";

const CONTACT_EMAIL = "carbike@gmail.com";
const CONTACT_PHONE = "7050862508";

const bubbles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 23) % 100}%`,
  size: 5 + ((i * 7) % 22),
  delay: `${(i % 9) * 0.7}s`,
  duration: `${8 + (i % 8) * 2}s`,
}));

const stars = Array.from({ length: 65 }, (_, i) => ({
  id: i,
  left: `${(i * 47) % 100}%`,
  top: `${(i * 31) % 100}%`,
  delay: `${(i % 10) * 0.4}s`,
}));

const floatingTexts = [
  { text: "WE LISTEN", left: "5%", top: "18%" },
  { text: "CARBYKE", left: "82%", top: "25%" },
  { text: "CONNECT", left: "7%", top: "65%" },
  { text: "24/7", left: "88%", top: "72%" },
  { text: "YOUR VOICE MATTERS", left: "35%", top: "90%" },
  { text: "DRIVE YOUR CHOICE", left: "72%", top: "48%" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [status, setStatus] = useState("");

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hello CARBYKE Team,

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}

Regards,
${form.name}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("Your email draft is ready. Please send it from your email app.");
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      detail: `+91 ${CONTACT_PHONE}`,
      description: "Talk directly with our team",
      link: `tel:+91${CONTACT_PHONE}`,
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: CONTACT_EMAIL,
      description: "Send us your questions anytime",
      link: `mailto:${CONTACT_EMAIL}`,
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "India",
      description: "Building a marketplace for everyone",
      link: "https://www.google.com/maps/search/?api=1&query=India",
      action: "Explore",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://youtube.com/",
    },
  ];

  return (
    <main className="contact-page relative isolate min-h-screen overflow-hidden bg-[#07080c] text-white">
      {/* COLORFUL ANIMATED BACKGROUND */}
      <div className="contact-background pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Colorful Aurora */}
        <div className="contact-aurora absolute inset-0" />

        {/* Moving Glow Orbs */}
        <div className="color-orb orb-red absolute -left-40 top-20 h-[500px] w-[500px] rounded-full" />
        <div className="color-orb orb-purple absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full" />
        <div className="color-orb orb-blue absolute -left-40 top-[55%] h-[450px] w-[450px] rounded-full" />
        <div className="color-orb orb-pink absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full" />
        <div className="color-orb orb-cyan absolute left-[35%] top-[35%] h-[350px] w-[350px] rounded-full" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Floating Bubbles */}
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="contact-bubble absolute rounded-full border border-white/20 bg-gradient-to-br from-red-400/20 via-purple-400/10 to-cyan-400/20"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}

        {/* Colorful Twinkling Stars */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="contact-star absolute h-1 w-1 rounded-full"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}

        {/* Floating Text */}
        {floatingTexts.map((item, index) => (
          <span
            key={index}
            className="contact-floating-text absolute hidden select-none font-black tracking-[4px] text-white/[0.08] sm:block"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: `${index * 1.2}s`,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        {/* HERO SECTION */}
        <section className="contact-reveal mx-auto mb-24 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/[0.08] px-5 py-2.5 text-xs font-bold tracking-[2px] text-red-400 shadow-lg shadow-red-950/20 sm:text-sm">
            <Sparkles size={16} />
            WE ARE HERE TO HELP
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Let's Start a
            <span className="contact-gradient block">Conversation.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a question about buying, selling or renting a vehicle? Our team
            is ready to help you make your next move.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="contact-primary-btn group flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-7 py-4 font-bold shadow-xl shadow-red-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-red-600/30"
            >
              Contact Our Team
              <ArrowUpRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={`tel:+91${CONTACT_PHONE}`}
              className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10"
            >
              <Phone
                size={18}
                className="text-red-400 transition group-hover:rotate-12"
              />
              Call Us
            </a>
          </div>

          {/* Decorative Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-10">
            {[
              ["01", "Your Questions"],
              ["02", "Our Support"],
              ["03", "Your Journey"],
            ].map(([number, label]) => (
              <div key={number} className="px-4 py-2">
                <p className="text-2xl font-black text-red-500 sm:text-3xl">
                  {number}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="mb-24 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className="contact-card contact-reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-red-500/[0.055] hover:shadow-2xl hover:shadow-red-950/30"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-500/[0.06] blur-2xl transition duration-500 group-hover:bg-red-500/20" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-400 shadow-lg shadow-red-950/20 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{card.title}</h3>

                  <p className="mt-3 break-words text-lg font-bold text-red-400">
                    {card.detail}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {card.description}
                  </p>

                  <a
                    href={card.link}
                    target={
                      card.title === "Our Location" ? "_blank" : undefined
                    }
                    rel={
                      card.title === "Our Location" ? "noreferrer" : undefined
                    }
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-red-400"
                  >
                    {card.action}
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* FORM + SIDE INFORMATION */}
        <section
          id="contact-form"
          className="grid scroll-mt-20 gap-8 lg:grid-cols-[1.15fr_.85fr]"
        >
          {/* CONTACT FORM */}
          <div className="contact-reveal relative overflow-hidden rounded-3xl border border-white/10 bg-[#101116]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-9">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-600/[0.08] blur-[90px]" />

            <div className="relative">
              <div className="mb-9">
                <div className="flex items-center gap-2 text-sm font-bold tracking-[3px] text-red-500">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  GET IN TOUCH
                </div>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Send Us a
                  <span className="contact-gradient ml-2">Message.</span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Fill out the form below. We'll be happy to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-300">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={updateForm}
                      placeholder="Enter your name"
                      maxLength={60}
                      required
                      className="contact-input w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateForm}
                      placeholder="you@example.com"
                      maxLength={100}
                      required
                      className="contact-input w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-300">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={updateForm}
                    className="contact-input w-full rounded-xl border border-white/10 bg-[#111217] px-4 py-4 text-sm text-slate-300 outline-none transition focus:border-red-500"
                  >
                    <option>General Enquiry</option>
                    <option>Buying a Vehicle</option>
                    <option>Selling a Vehicle</option>
                    <option>Renting a Vehicle</option>
                    <option>Technical Support</option>
                    <option>Business Partnership</option>
                    <option>Feedback & Suggestions</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-300">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    maxLength={1500}
                    required
                    className="contact-input w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                  />

                  <p className="mt-2 text-right text-xs text-slate-500">
                    <span className="text-red-400">{form.message.length}</span>
                    /1500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  className="contact-primary-btn group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-6 py-4 font-bold shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-1 hover:shadow-red-600/30 active:scale-[0.98]"
                >
                  Send Message
                  <Send
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {status && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm leading-6 text-green-400"
                  >
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between gap-8">
            {/* CARBYKE BRAND CARD */}
            <div className="contact-brand-card relative flex-1 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/70 via-[#171015] to-[#0c0c10] p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-500/15 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-800/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-red-600 text-white shadow-xl shadow-red-950/40">
                  <CarFront size={32} />
                </div>

                <p className="mt-8 text-xs font-bold tracking-[4px] text-red-400">
                  THE CARBYKE EXPERIENCE
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Let's Make Your
                  <span className="contact-gradient block">Next Move.</span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  Whether you're looking for your dream vehicle or planning to
                  sell or rent one, CARBYKE is here to make the journey simpler.
                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
                    <Clock size={21} className="text-red-400" />
                  </div>

                  <div>
                    <p className="font-bold">We're building for you</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Your feedback matters to CARBYKE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORT CARD */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:border-red-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Headphones size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">We're Listening.</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Every message makes us better.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Have an idea, suggestion or feedback? Share it with us. We're
                always looking for ways to improve CARBYKE.
              </p>

              <a
                href="#contact-form"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-400 transition hover:text-white"
              >
                Share Your Feedback
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold">Connect With Us</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Follow CARBYKE and stay connected with our journey.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-13 w-13 h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-900/30"
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="contact-bottom-cta relative mt-24 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/70 via-[#171015] to-[#141015] px-6 py-12 text-center sm:px-10">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-red-500/15 blur-3xl" />

          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
              <MessageCircle size={26} />
            </div>

            <h2 className="mt-6 text-2xl font-black sm:text-4xl">
              CARBYKE — Drive Your
              <span className="contact-gradient"> Choice.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Your journey starts with the right connection. We're always happy
              to hear from you.
            </p>

            <a
              href="#contact-form"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-bold transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-lg hover:shadow-red-900/30"
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </div>

      {/* ANIMATIONS */}
      <style>{`
      
/* COLORFUL AURORA BACKGROUND */
.contact-aurora {
  background:
    radial-gradient(ellipse at 15% 20%, rgba(255, 0, 76, .20), transparent 45%),
    radial-gradient(ellipse at 85% 20%, rgba(125, 35, 255, .22), transparent 45%),
    radial-gradient(ellipse at 20% 80%, rgba(0, 110, 255, .18), transparent 45%),
    radial-gradient(ellipse at 85% 85%, rgba(255, 0, 160, .17), transparent 45%),
    radial-gradient(ellipse at 50% 50%, rgba(0, 220, 255, .09), transparent 50%);
  background-size: 180% 180%;
  animation: auroraMove 14s ease-in-out infinite alternate;
}

@keyframes auroraMove {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}

/* COLORFUL MOVING ORBS */
.color-orb {
  filter: blur(100px);
  opacity: .45;
  animation: orbFloat 12s ease-in-out infinite alternate;
  transition: all 1s ease;
}

.orb-red {
  background: #ff1744;
  animation-delay: 0s;
}

.orb-purple {
  background: #8b2cff;
  animation-delay: -3s;
}

.orb-blue {
  background: #126bff;
  animation-delay: -5s;
}

.orb-pink {
  background: #ff1493;
  animation-delay: -7s;
}

.orb-cyan {
  background: #00c8ff;
  animation-delay: -2s;
}

@keyframes orbFloat {
  0% {
    transform: translate3d(0, 0, 0) scale(.85);
  }
  50% {
    transform: translate3d(60px, -50px, 0) scale(1.15);
  }
  100% {
    transform: translate3d(-40px, 70px, 0) scale(.95);
  }
}

/* FLOATING BUBBLES */
.contact-bubble {
  animation: contactBubble linear infinite;
  opacity: 0;
  backdrop-filter: blur(3px);
  box-shadow: 0 0 20px rgba(150, 50, 255, .12);
}

@keyframes contactBubble {
  0% {
    transform: translateY(60px) translateX(0) scale(.6) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: .7;
  }
  50% {
    transform: translateY(-30px) translateX(25px) scale(1.1) rotate(90deg);
    opacity: .5;
  }
  100% {
    transform: translateY(-180px) translateX(-20px) scale(1.4) rotate(180deg);
    opacity: 0;
  }
}

/* COLORFUL STARS */
.contact-star {
  background: #fff;
  box-shadow:
    0 0 5px #fff,
    0 0 12px #ff3b72,
    0 0 22px #8b2cff;
  animation: contactTwinkle 3s ease-in-out infinite;
}

@keyframes contactTwinkle {
  0%, 100% {
    opacity: .15;
    transform: scale(.5);
  }
  50% {
    opacity: 1;
    transform: scale(2);
  }
}

/* FLOATING TEXT */
.contact-floating-text {
  animation: contactFloat 8s ease-in-out infinite;
  transition: color .5s ease;
}

@keyframes contactFloat {
  0%, 100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-22px) rotate(2deg);
  }
}

/* CARD TRANSITIONS */
.contact-card,
.contact-brand-card,
.contact-bottom-cta {
  transition:
    transform .5s ease,
    border-color .5s ease,
    box-shadow .5s ease,
    background .5s ease;
}

.contact-card:hover {
  box-shadow:
    0 20px 60px rgba(255, 0, 70, .12),
    0 0 30px rgba(130, 30, 255, .08);
}

.contact-brand-card:hover {
  border-color: rgba(255, 50, 100, .5);
}

.contact-bottom-cta:hover {
  box-shadow: 0 0 50px rgba(160, 30, 255, .12);
}

@media (prefers-reduced-motion: reduce) {
  .contact-page *,
  .contact-page *::before,
  .contact-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}

        .contact-gradient {
          background: linear-gradient(
            100deg,
            #ffffff 0%,
            #ffb4c0 25%,
            #ff334f 55%,
            #e2e8f0 85%,
            #ffffff 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: contactGradient 6s linear infinite;
        }

        @keyframes contactGradient {
          to {
            background-position: 250% center;
          }
        }

        .contact-bubble {
          animation: contactBubble linear infinite;
          opacity: 0;
        }

        @keyframes contactBubble {
          0% {
            transform: translateY(40px) scale(.6);
            opacity: 0;
          }
          20% {
            opacity: .55;
          }
          80% {
            opacity: .25;
          }
          100% {
            transform: translateY(-130px) scale(1.3);
            opacity: 0;
          }
        }

        .contact-star {
          animation: contactTwinkle 3s ease-in-out infinite;
          box-shadow: 0 0 9px rgba(248, 113, 133, .8);
        }

        @keyframes contactTwinkle {
          0%, 100% {
            opacity: .12;
            transform: scale(.6);
          }
          50% {
            opacity: .9;
            transform: scale(1.7);
          }
        }

        .contact-floating-text {
          animation: contactFloat 8s ease-in-out infinite;
        }

        @keyframes contactFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        .contact-glow {
          animation: contactGlow 8s ease-in-out infinite alternate;
        }

        .contact-glow-delay {
          animation-delay: 2s;
        }

        @keyframes contactGlow {
          from {
            transform: scale(.9);
            opacity: .5;
          }
          to {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        .contact-reveal {
          animation: contactReveal .8s ease-out both;
        }

        .contact-card:nth-child(2) {
          animation-delay: .15s;
        }

        .contact-card:nth-child(3) {
          animation-delay: .3s;
        }

        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-input:focus {
          box-shadow: 0 0 22px rgba(220, 38, 38, .08);
        }

        .contact-primary-btn {
          position: relative;
          overflow: hidden;
        }

        .contact-primary-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.18),
            transparent
          );
          transform: skewX(-20deg);
          transition: left .7s ease;
        }

        .contact-primary-btn:hover::before {
          left: 150%;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
