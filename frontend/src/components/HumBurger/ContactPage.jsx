
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
} from "lucide-react";

const CONTACT_EMAIL = "carbike@gmail.com";
const CONTACT_PHONE = "7050862508";

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
${form.name}`
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090d] text-white">

      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-96 h-96 w-96 animate-pulse rounded-full bg-red-900/20 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">

        {/* Hero */}
        <section className="mx-auto mb-20 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
            <MessageCircle size={16} />
            WE ARE HERE TO HELP
          </div>

          <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-red-400 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a question about buying, selling or renting a vehicle?
            Our team is ready to help you make your next move.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="group flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-red-600/40"
            >
              Contact Our Team
              <ArrowUpRight
                size={19}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={`tel:+91${CONTACT_PHONE}`}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mb-24 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className="group animate-[fadeUp_.7s_ease-out_both] rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-red-500/[0.06] hover:shadow-2xl hover:shadow-red-950/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-xl font-bold">{card.title}</h3>

                <p className="mt-3 break-words text-lg font-semibold text-red-400">
                  {card.detail}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {card.description}
                </p>

                <a
                  href={card.link}
                  target={card.title === "Our Location" ? "_blank" : undefined}
                  rel={card.title === "Our Location" ? "noreferrer" : undefined}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-red-400"
                >
                  {card.action}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}
        </section>

        {/* Contact Form + Information */}
        <section
          id="contact-form"
          className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]"
        >

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-[#111217]/90 p-6 shadow-2xl shadow-black/30 sm:p-9">
            <div className="mb-8">
              <span className="text-sm font-bold tracking-[3px] text-red-500">
                GET IN TOUCH
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Fill out the form below. We'll be happy to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
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
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
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
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={updateForm}
                  className="w-full rounded-xl border border-white/10 bg-[#111217] px-4 py-4 text-sm text-slate-300 outline-none transition focus:border-red-500"
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
                <label className="mb-2 block text-sm font-semibold text-slate-300">
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
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm outline-none transition duration-300 placeholder:text-slate-600 focus:border-red-500 focus:bg-red-500/[0.04] focus:ring-2 focus:ring-red-500/10"
                />
                <p className="mt-2 text-right text-xs text-slate-500">
                  {form.message.length}/1500
                </p>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-700 to-red-500 px-6 py-4 font-bold shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-1 hover:from-red-600 hover:to-orange-500 hover:shadow-red-600/30 active:scale-[0.98]"
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
                  className="flex items-start gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm leading-6 text-green-400"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Side Information */}
          <div className="flex flex-col justify-between gap-8">
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/70 via-[#171015] to-[#0c0c10] p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-900/40">
                  <CarFront size={30} />
                </div>

                <h2 className="mt-8 text-3xl font-black leading-tight">
                  Let's Make Your
                  <span className="block text-red-500">
                    Next Move.
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  Whether you're looking for your dream vehicle or
                  planning to sell or rent one, CARBYKE is here to
                  make the journey simpler.
                </p>

                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    <Clock size={20} className="text-red-400" />
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

            {/* Social Links */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
              <h3 className="text-xl font-bold">Connect With Us</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Follow CARBYKE and stay connected with our journey.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: Instagram, label: "Instagram", url: "https://instagram.com/" },
                  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/" },
                  { icon: Youtube, label: "YouTube", url: "https://youtube.com/" },
                ].map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-600 hover:text-white"
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/70 to-[#141015] px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-black sm:text-3xl">
            CARBYKE — Drive Your Choice.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Your journey starts with the right connection.
          </p>
        </section>

      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
