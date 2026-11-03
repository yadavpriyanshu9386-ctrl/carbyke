import {
  ArrowRight,
  BadgeCheck,
  Phone,
  Send,
  Star,
  Users,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  CarFront,
  Sparkles,
  Github,
} from "lucide-react";

import { socials } from "../data/socials.js";

const team = [
  { name: "Priyanshu", number: "01", role: "Founder & Developer" },
  { name: "Deepak", number: "02", role: "Core Team Member" },
  { name: "Mrinal", number: "03", role: "Core Team Member" },
  { name: "Himanshu", number: "04", role: "Core Team Member" },
  { name: "Sanjeev", number: "05", role: "Core Team Member" },
];

const features = [
  {
    title: "Trusted Connections",
    description: "Explore vehicle listings and connect with sellers directly.",
    Icon: Users,
    color: "about-red",
  },
  {
    title: "Clear Information",
    description: "Compare prices, mileage, fuel type and vehicle details.",
    Icon: BadgeCheck,
    color: "about-purple",
  },
  {
    title: "Your Choice",
    description: "Find a car or bike that matches your needs and budget.",
    Icon: Star,
    color: "about-pink",
  },
];

function AboutPage() {
  return (
    <main className="about-page relative isolate overflow-hidden">
      {/* Animated background */}
      <div className="about-background" aria-hidden="true">
        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />
        <div className="about-glow about-glow-three" />

        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="about-bubble"
            style={{
              left: `${(index * 17 + 5) % 100}%`,
              animationDelay: `${index * -1.3}s`,
              animationDuration: `${9 + (index % 5) * 2}s`,
              width: `${8 + (index % 4) * 7}px`,
              height: `${8 + (index % 4) * 7}px`,
            }}
          />
        ))}
      </div>

      <div className="about-content mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Hero section */}
        <section className="about-hero grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="about-tag">
              <CarFront size={17} />
              <span>ABOUT CARBYKE</span>
              <Sparkles size={15} />
            </div>

            <h1 className="about-heading mt-7 text-5xl font-black leading-tight md:text-7xl">
              Better Rides.
              <br />
              <span>Better Deals.</span>
            </h1>

            <div className="about-heading-line" />

            <p className="about-description mt-7 max-w-2xl text-base leading-8 md:text-lg">
              CARBYKE is a modern marketplace built to make buying, selling and
              renting pre-owned cars and bikes easier and more transparent. We
              bring vehicle details and seller connections together in one
              convenient place, helping people compare options and discover
              vehicles that match their needs and budget.
            </p>

            <a href="#our-story" className="about-explore mt-8 inline-flex">
              Explore Our Story <ArrowRight size={18} />
            </a>
          </div>

          <div className="about-visual">
            <div className="about-visual-ring" />
            <div className="about-visual-inner">
              <CarFront size={105} strokeWidth={1.1} />
              <span className="about-visual-text">DRIVE YOUR CHOICE</span>
              <span className="about-visual-caption">
                Cars. Bikes. Your Journey.
              </span>
            </div>
            <span className="about-floating-icon icon-one">✦</span>
            <span className="about-floating-icon icon-two">✧</span>
            <span className="about-floating-icon icon-three">✦</span>
          </div>
        </section>

        {/* Story section */}
        <section id="our-story" className="mt-24">
          <div className="about-section-title text-center">
            <span>WHAT DRIVES US</span>
            <h2>
              More Than Just <span>A Marketplace</span>
            </h2>
            <p>
              Making every vehicle journey simpler, clearer and more convenient.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(({ title, description, Icon, color }, index) => (
              <article
                key={title}
                className={`about-feature-card ${color}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="about-feature-icon">
                  <Icon size={30} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowRight className="about-feature-arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        {/* Team section */}
        <section className="about-team-section mt-28">
          <div className="about-section-title text-center">
            <span>THE PEOPLE BEHIND CARBYKE</span>
            <h2>
              Meet Our <span>Dream Team</span>
            </h2>
            <p>Five friends. One vision. One journey.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="about-member-card"
                style={{ animationDelay: `${index * 0.13}s` }}
              >
                <div className="about-member-number">{member.number}</div>

                <div className="about-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>

                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="about-member-line" />
              </article>
            ))}
          </div>
        </section>

        {/* Contact and social section */}
        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          <div className="about-contact-card">
            <span className="about-small-label">GET IN TOUCH</span>
            <h2>
              Let's <span>Connect.</span>
            </h2>
            <p>Questions or feedback? We'd love to hear from you.</p>

            <a href="tel:7050862508" className="about-contact-link">
              <span className="about-contact-icon">
                <Phone size={22} />
              </span>
              <span>
                <small>Phone</small>
                7050862508
              </span>
              <ArrowRight className="ml-auto" size={18} />
            </a>

            <a href="mailto:carbike@gmail.com" className="about-contact-link">
              <span className="about-contact-icon">
                <Send size={22} />
              </span>
              <span>
                <small>Email</small>
                carbike@gmail.com
              </span>
              <ArrowRight className="ml-auto" size={18} />
            </a>
          </div>

          <div className="about-social-card">
            <span className="about-small-label">STAY CONNECTED</span>
            <h2>
              Follow Our <span>Journey.</span>
            </h2>
            <p>Follow CARBYKE for updates, new listings and community news.</p>

            <div className="about-social-list">
              {socials.map(({ name, Icon, url }, index) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="about-social-icon"
                  style={{
                    "--bounce-delay": `${index * 0.12}s`,
                    "--float-delay": `${index * 0.3}s`,
                  }}
                >
                  <Icon size={23} />
                </a>
              ))}
            </div>

            <div className="about-social-footer">
              <Sparkles size={17} />
              <span>Let's build something amazing!</span>
            </div>
          </div>
        </section>

        {/* Bottom quote */}
        <footer className="about-bottom mt-24">
          <div className="about-bottom-line" />
          <h2>
            CARBYKE <span>— Drive Your Choice.</span>
          </h2>
          <p>Built with passion, powered by friendship.</p>
        </footer>
      </div>
    </main>
  );
}

export default AboutPage;
