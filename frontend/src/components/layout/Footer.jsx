import {
  ArrowRight,
  CarFront,
  Phone,
  Send,
  MapPin,
  Heart,
  Sparkles,
} from "lucide-react";
import { socials } from "../../data/socials.js";

function Footer({ navigate }) {
  const quickLinks = [
    { label: "Home", page: "Home" },
    { label: "Buy Vehicles", page: "Buy" },
    { label: "Sell Vehicle", page: "Sell" },
    { label: "Rent Vehicles", page: "Rent" },
    { label: "About Us", page: "About Us" },
  ];

  return (
    <footer className="carbyke-footer relative isolate overflow-hidden border-t border-red-500/30 bg-[#050507] text-white">
      {/* Animated background bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="footer-glow footer-glow-one" />
        <div className="footer-glow footer-glow-two" />

        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="footer-bubble"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              animationDelay: `${i * 1.3}s`,
              animationDuration: `${12 + (i % 5) * 3}s`,
              width: `${8 + (i % 4) * 7}px`,
              height: `${8 + (i % 4) * 7}px`,
            }}
          />
        ))}
      </div>

      {/* Main footer */}
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr] lg:px-10">
        {/* Brand */}
        <div className="footer-column">
          <button
            onClick={() => navigate("Home")}
            className="group mb-5 flex items-center gap-3"
            aria-label="Go to CARBYKE Home"
          >
            <span className="brand-icon">
              <CarFront size={34} strokeWidth={2.2} />
            </span>

            <span className="text-3xl font-black tracking-tight">
              <span className="footer-gradient">CAR</span>
              <span className="text-white">BYKE</span>
            </span>
          </button>

          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Your destination for buying, selling and renting pre-owned cars and
            bikes. Discover better rides, connect with genuine sellers and make
            every deal with confidence.
          </p>

          <p className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-red-400">
            <Sparkles size={16} />
            Better Rides. Better Deals.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="footer-tag">Cars</span>
            <span className="footer-tag">Bikes</span>
            <span className="footer-tag">Buy</span>
            <span className="footer-tag">Sell</span>
            <span className="footer-tag">Rent</span>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="mb-6 footer-heading-line" />

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => navigate(link.page)}
                  className="footer-link group"
                >
                  <ArrowRight
                    size={15}
                    className="text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h3 className="footer-heading">About CARBYKE</h3>
          <div className="mb-6 footer-heading-line" />

          <p className="text-sm leading-7 text-slate-300">
            CARBYKE makes vehicle discovery simple. Explore listings, compare
            vehicle details and connect with sellers directly. We believe buying
            and selling vehicles should feel clear, convenient and reliable.
          </p>

          <button
            onClick={() => navigate("About Us")}
            className="footer-learn-more mt-5"
          >
            Explore our story
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Contact & social */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact & Connect</h3>
          <div className="mb-6 footer-heading-line" />

          <a href="tel:7050862508" className="footer-contact">
            <span className="contact-icon">
              <Phone size={17} />
            </span>
            <span>7050862508</span>
          </a>

          <a href="mailto:carbike@gmail.com" className="footer-contact">
            <span className="contact-icon">
              <Send size={17} />
            </span>
            <span>carbike@gmail.com</span>
          </a>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-red-500" />
            <span>India</span>
          </div>

          <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Follow our journey
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ name, Icon, url }, index) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                aria-label={`Visit CARBYKE on ${name}`}
                className="social-float"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-10">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-red-400">CARBYKE</span>. All rights
            reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-slate-400">
            Made with
            <Heart size={13} className="fill-red-500 text-red-500" />
            for every ride.
          </p>

          <p className="text-xs font-medium tracking-wider text-slate-500">
            DRIVE YOUR DREAM
          </p>
        </div>
      </div>

      {/* Footer animations and styling */}
      <style>{`
        .carbyke-footer {
          isolation: isolate;
          background:
            radial-gradient(ellipse at 15% 15%, rgba(127, 29, 29, 0.22), transparent 42%),
            radial-gradient(ellipse at 90% 75%, rgba(153, 27, 27, 0.16), transparent 40%),
            #050507;
        }

        .footer-gradient {
          background: linear-gradient(110deg, #ff3434, #ff7777, #b91c1c, #ff3434);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientFlow 5s ease infinite;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        .brand-icon {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          border: 1px solid rgba(248, 63, 63, 0.5);
          border-radius: 17px;
          color: #ff4545;
          background: linear-gradient(145deg, rgba(127, 29, 29, 0.4), rgba(10, 10, 12, 0.9));
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.15);
          transition: 0.4s ease;
        }

        .group:hover .brand-icon {
          transform: translateY(-4px) rotate(-5deg);
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.4);
        }

        .footer-heading {
          color: #fff;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .footer-column:hover .footer-heading {
          color: #ff7777;
        }

        .footer-heading-line {
          width: 48px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, #ef4444, transparent);
          transition: width 0.4s ease;
        }

        .footer-column:hover .footer-heading-line {
          width: 85px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #aeb4c0;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #ff6666;
          transform: translateX(5px);
          text-shadow: 0 0 12px rgba(239, 68, 68, 0.35);
        }

        .footer-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff6565;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .footer-learn-more:hover {
          color: white;
          gap: 15px;
          text-shadow: 0 0 12px rgba(239, 68, 68, 0.6);
        }

        .footer-contact {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 13px;
          color: #cbd5e1;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-contact:hover {
          color: #ff7777;
          transform: translateX(4px);
        }

        .contact-icon {
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 11px;
          color: #ff5b5b;
          background: rgba(127, 29, 29, 0.18);
          transition: all 0.3s ease;
        }

        .footer-contact:hover .contact-icon {
          color: white;
          background: #b91c1c;
          box-shadow: 0 0 18px rgba(239, 68, 68, 0.4);
        }

        .social-float {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
          color: #e2e8f0;
          background: linear-gradient(145deg, rgba(45, 45, 50, 0.9), rgba(12, 12, 15, 0.95));
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          animation: socialFloat 3s ease-in-out infinite;
          transition: color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .social-float:hover {
          color: white;
          background: linear-gradient(135deg, #ef4444, #991b1b);
          border-color: #fb6666;
          box-shadow: 0 0 22px rgba(239, 68, 68, 0.55);
          transform: translateY(-8px) scale(1.12) rotate(-5deg);
          animation-play-state: paused;
        }

        @keyframes socialFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .footer-tag {
          padding: 6px 11px;
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 999px;
          color: #fca5a5;
          background: rgba(127, 29, 29, 0.14);
          font-size: 11px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .footer-tag:hover {
          color: white;
          border-color: #ef4444;
          background: rgba(185, 28, 28, 0.45);
          transform: translateY(-3px);
        }

        .footer-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(85px);
          opacity: 0.2;
          animation: glowDrift 12s ease-in-out infinite alternate;
        }

        .footer-glow-one {
          top: -150px;
          left: -100px;
          background: #dc2626;
        }

        .footer-glow-two {
          right: -120px;
          bottom: -180px;
          background: #991b1b;
          animation-delay: -5s;
        }

        @keyframes glowDrift {
          from { transform: translate(0, 0) scale(0.9); }
          to { transform: translate(70px, 40px) scale(1.2); }
        }

        .footer-bubble {
          position: absolute;
          bottom: -30px;
          display: block;
          border: 1px solid rgba(248, 113, 113, 0.35);
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.08);
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.12);
          animation: bubbleRise linear infinite;
        }

        @keyframes bubbleRise {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          15% { opacity: 0.6; }
          85% { opacity: 0.4; }
          100% { transform: translateY(-650px) scale(1.3); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-bubble,
          .footer-glow,
          .social-float,
          .footer-gradient {
            animation: none !important;
          }

          .footer-link,
          .social-float,
          .footer-contact,
          .footer-tag {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
