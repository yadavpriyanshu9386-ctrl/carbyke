import {
  ArrowRight,
  BadgeCheck,
  Phone,
  Send,
  Star,
  Users,
} from "lucide-react";
import { socials } from "../data/socials.js";

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <span className="rounded bg-red px-3 py-1.5 text-[10px] font-extrabold uppercase">
        About DriveDeals
      </span>
      <h1 className="mt-4 text-4xl font-extrabold">
        Better Rides. <span className="text-red">Better Deals.</span>
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
        DriveDeals is a modern marketplace built to make buying, selling and
        renting pre-owned cars and bikes easier and more transparent. We bring
        vehicle details and seller connections together in one convenient place,
        helping people compare options, discover value and make more informed
        decisions. Our goal is to create a straightforward experience where
        every customer can explore confidently, ask the right questions and find
        a ride that fits their needs and budget. We encourage honest listings,
        clear communication and careful document checks at every step.
      </p>
      <div className="mt-9 grid gap-4 sm:grid-cols-3">
        {[
          [
            "Trusted Connections",
            "Explore vehicle listings and contact sellers directly.",
            <Users />,
          ],
          [
            "Clear Information",
            "Compare prices, mileage, fuel type and vehicle details.",
            <BadgeCheck />,
          ],
          [
            "Your Choice",
            "Find a car or bike that suits your plans and budget.",
            <Star />,
          ],
        ].map(([t, d, i]) => (
          <div key={t} className="rounded-xl border border-line bg-panel p-5">
            <div className="mb-3 text-red">{i}</div>
            <h3 className="font-bold">{t}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 rounded-xl border border-line bg-panel p-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Contact Details</h2>
          <p className="mt-2 text-sm text-slate-400">
            Questions or feedback? We’d love to hear from you.
          </p>
          <a
            className="mt-5 flex items-center gap-3 text-slate-200 hover:text-red"
            href="tel:7050862508"
          >
            <span className="rounded-lg bg-[#101f2b] p-3 text-red">
              <Phone />
            </span>
            <span>
              <span className="block text-xs text-slate-500">Phone</span>
              7050862508
            </span>
          </a>
          <a
            className="mt-3 flex items-center gap-3 text-slate-200 hover:text-red"
            href="mailto:carbike@gmail.com"
          >
            <span className="rounded-lg bg-[#101f2b] p-3 text-red">
              <Send />
            </span>
            <span>
              <span className="block text-xs text-slate-500">Email</span>
              carbike@gmail.com
            </span>
          </a>
        </div>
        <div>
          <h2 className="text-xl font-bold">Connect with us</h2>
          <p className="mt-2 text-sm text-slate-400">
            Follow DriveDeals for updates, new listings and community news.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {socials.map(({ name, Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-line bg-[#061019] p-3 text-sm hover:border-red hover:text-red"
              >
                <Icon size={19} />
                {name}
                <ArrowRight className="ml-auto" size={14} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Social links currently point to each platform’s main website.
            Replace them with your official profile URLs before launch.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
