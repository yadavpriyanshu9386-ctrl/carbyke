import {
  ArrowRight,
  CarFront,
  Phone,
  Send,
} from "lucide-react";
import { socials } from "../../data/socials.js";

function Footer({ navigate }) {
  return (
    <footer className="border-t border-line bg-[#03080d]">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-9 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <button
            className="flex items-center gap-2"
            onClick={() => navigate("Buy")}
          >
            <CarFront className="text-red" size={38} />
            <span className="text-xl font-extrabold">
              Drive<span className="text-red">Deals</span>
            </span>
          </button>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Your trusted destination for buying, selling and renting pre-owned
            cars and bikes. Transparent listings, genuine connections and
            better deals — all in one place.
          </p>
          <p className="mt-3 text-xs italic text-slate-500">
            Better Rides. Better Deals.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-bold">About Us</h3>
          <p className="text-sm leading-6 text-slate-400">
            DriveDeals makes vehicle ownership simpler. Explore a curated
            marketplace, compare vehicle details and connect with sellers
            directly. We aim to make every journey from discovery to deal
            clear, convenient and reliable.
          </p>
          <button
            onClick={() => navigate("About Us")}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red hover:underline"
          >
            Learn more <ArrowRight size={14} />
          </button>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Contact & Connect</h3>
          <a
            className="mb-2 flex items-center gap-2 text-sm text-slate-300 hover:text-red"
            href="tel:7050862508"
          >
            <Phone size={15} className="text-red" />
            7050862508
          </a>
          <a
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-red"
            href="mailto:carbike@gmail.com"
          >
            <Send size={15} className="text-red" />
            carbike@gmail.com
          </a>
          <p className="mb-3 mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Connect with us
          </p>
          <div className="flex gap-2">
            {socials.map(({ name, Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                title={name}
                aria-label={name}
                className="social-btn"
              >
                {typeof Icon === "function" && name === "Threads" ? (
                  <Icon />
                ) : (
                  <Icon size={17} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} DriveDeals. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
