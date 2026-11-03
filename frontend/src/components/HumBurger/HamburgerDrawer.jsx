import { useEffect } from "react";
import { CarFront, X, Smartphone, ArrowUpRight, Sparkles } from "lucide-react";

import { menuSections } from "./menuItems";
import MenuItem from "./MenuItem";

const bubbles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: 12 + ((i * 17) % 75),
  left: (i * 37) % 100,
  delay: (i * 1.7) % 18,
  duration: 9 + ((i * 13) % 16),
  opacity: 0.12 + ((i * 7) % 25) / 100,
}));

function HamburgerDrawer({
  open,
  onClose,
  navigate,
  wishlistCount = 0,
  isLoggedIn = false,
  onLogin,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSelect = (item) => {
    if (item.loginRequired && !isLoggedIn) {
      onClose();
      onLogin?.();
      return;
    }

    if (item.target) navigate(item.target);
    onClose();
  };

  return (
    <>
      {/* ANIMATED BACKDROP */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-md transition-all duration-500 ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* DRAWER */}
      <aside
        role="dialog"
        aria-modal={open}
        aria-label="CARBYKE navigation menu"
        aria-hidden={!open}
        className={`carbyke-drawer fixed left-0 top-0 z-[70] flex h-dvh w-[310px] max-w-[90vw] flex-col overflow-hidden border-r border-red-500/20 bg-[#070709] text-white shadow-[20px_0_80px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[360px] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ANIMATED BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="drawer-glow drawer-glow-one" />
          <div className="drawer-glow drawer-glow-two" />
          <div className="drawer-glow drawer-glow-three" />

          {bubbles.map((bubble) => (
            <span
              key={bubble.id}
              className="drawer-bubble"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
                opacity: bubble.opacity,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#09090d]/45 to-black/80" />
        </div>

        {/* HEADER */}
        <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-red-500/20 bg-black/35 px-5 py-5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="logo-glow grid h-12 w-12 place-items-center rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-600/30 to-black shadow-lg">
              <CarFront size={29} className="text-red-400" />
            </div>

            <div>
              <h2 className="text-[22px] font-black tracking-[1px]">
                CAR<span className="text-red-500">BYKE</span>
              </h2>
              <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-400">
                Drive Your Dreams
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:rotate-90 hover:border-red-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* MENU CONTENT */}
        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-6 [scrollbar-color:#991b1b_transparent] [scrollbar-width:thin]">
          <div className="mb-7 flex items-center justify-between px-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[3px] text-red-400">
                Explore CARBYKE
              </p>
              <p className="mt-1 text-[9px] tracking-wider text-gray-500">
                YOUR JOURNEY STARTS HERE
              </p>
            </div>

            <Sparkles size={19} className="text-red-500" />
          </div>

          {/* MENU SECTIONS */}
          {menuSections.map((section) => {
            const visibleItems = section.items.filter(
              (item) => !item.loginRequired || isLoggedIn,
            );

            if (!visibleItems.length) return null;

            return (
              <section key={section.title} className="mb-7">
                <div className="mb-3 flex items-center gap-3 px-2">
                  <span className="h-4 w-[3px] rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />

                  <p className="text-[10px] font-black uppercase tracking-[2.5px] text-gray-400">
                    {section.title}
                  </p>

                  <div className="h-px flex-1 bg-gradient-to-r from-red-500/40 via-white/10 to-transparent" />
                </div>

                <div className="drawer-menu-items space-y-2">
                  {visibleItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      onSelect={handleSelect}
                      wishlistCount={wishlistCount}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {/* APP DOWNLOAD CARD */}
          <div className="app-download-card group relative mt-8 overflow-hidden rounded-2xl border border-red-500/30 p-5">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-600/25 blur-[55px] transition-all duration-700 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-red-500/40 bg-red-500/15 shadow-[0_0_25px_rgba(220,38,38,0.15)]">
                  <Smartphone size={24} className="text-red-400" />
                </div>

                <span className="rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-red-300">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-lg font-black tracking-wide text-white">
                CARBYKE APP
              </h3>

              <p className="mb-5 mt-2 text-xs leading-6 text-gray-400">
                Your favourite vehicles, right at your fingertips. Experience
                the next level of vehicle shopping.
              </p>

              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-gradient-to-r from-red-700/60 to-red-950/60 py-3 text-xs font-black uppercase tracking-[1px] text-red-200"
              >
                App Launching Soon
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="relative z-10 shrink-0 border-t border-red-500/20 bg-black/50 px-5 py-5 backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-red-500/60" />
            <CarFront size={17} className="text-red-500" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-red-500/60" />
          </div>

          <p className="text-center text-[9px] font-bold uppercase tracking-[2px] text-gray-500">
            © CARBYKE · ALL RIGHTS RESERVED
          </p>
        </div>

        {/* DRAWER ANIMATION STYLES */}
        <style>{`
          .carbyke-drawer {
            font-family: Inter, "Segoe UI", sans-serif;
            isolation: isolate;
          }

          .drawer-glow {
            position: absolute;
            width: 230px;
            height: 230px;
            border-radius: 50%;
            filter: blur(75px);
            pointer-events: none;
            animation: glowMove 12s ease-in-out infinite alternate;
          }

          .drawer-glow-one {
            top: 5%;
            left: -120px;
            background: rgba(220, 38, 38, 0.30);
          }

          .drawer-glow-two {
            top: 42%;
            right: -140px;
            background: rgba(185, 28, 28, 0.24);
            animation-delay: -4s;
          }

          .drawer-glow-three {
            bottom: 5%;
            left: 5%;
            background: rgba(127, 29, 29, 0.28);
            animation-delay: -7s;
          }

          .drawer-bubble {
            position: absolute;
            bottom: -100px;
            display: block;
            border-radius: 50%;
            border: 1px solid rgba(248, 113, 113, 0.35);
            background: radial-gradient(
              circle at 30% 25%,
              rgba(255, 180, 180, 0.30),
              rgba(220, 38, 38, 0.12) 45%,
              rgba(0, 0, 0, 0.02) 75%
            );
            box-shadow:
              inset 0 0 15px rgba(239, 68, 68, 0.15),
              0 0 18px rgba(220, 38, 38, 0.10);
            animation-name: bubbleFloat;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            pointer-events: none;
          }

          @keyframes bubbleFloat {
            0% {
              transform: translate3d(0, 0, 0) scale(0.7);
            }
            50% {
              transform: translate3d(35px, -55vh, 0) scale(1.15);
            }
            100% {
              transform: translate3d(-25px, -115vh, 0) scale(0.8);
            }
          }

          @keyframes glowMove {
            from {
              transform: translate3d(-15px, -10px, 0) scale(0.9);
            }
            to {
              transform: translate3d(35px, 45px, 0) scale(1.3);
            }
          }

          .logo-glow {
            animation: logoPulse 3s ease-in-out infinite;
          }

          @keyframes logoPulse {
            0%, 100% {
              box-shadow: 0 0 10px rgba(220, 38, 38, 0.10);
            }
            50% {
              box-shadow: 0 0 25px rgba(220, 38, 38, 0.30);
            }
          }

          .app-download-card {
            background:
              radial-gradient(ellipse at 100% 0%, rgba(220,38,38,.22), transparent 55%),
              linear-gradient(145deg, rgba(55,10,18,.92), rgba(10,10,13,.96) 70%);
            box-shadow: inset 0 1px rgba(255,255,255,.04);
            transition: border-color .4s ease, box-shadow .4s ease;
          }

          .app-download-card:hover {
            border-color: rgba(248, 113, 113, .65);
            box-shadow: 0 0 28px rgba(220, 38, 38, .13);
          }

          /* PREMIUM MENU BUTTONS */
          .drawer-menu-items button,
          .drawer-menu-items a {
            font-family: Inter, "Segoe UI", sans-serif;
            letter-spacing: .25px;
            transition:
              background .3s ease,
              border-color .3s ease,
              color .3s ease,
              box-shadow .3s ease,
              transform .3s ease;
          }

          .drawer-menu-items button:hover,
          .drawer-menu-items a:hover {
            border-color: rgba(239, 68, 68, .38);
            box-shadow:
              0 5px 20px rgba(127, 29, 29, .16),
              inset 0 0 18px rgba(220, 38, 38, .07);
          }

          @media (prefers-reduced-motion: reduce) {
            .drawer-bubble,
            .drawer-glow,
            .logo-glow {
              animation: none !important;
            }

            .carbyke-drawer,
            .carbyke-drawer * {
              scroll-behavior: auto !important;
              transition-duration: .01ms !important;
            }
          }
        `}</style>
      </aside>
    </>
  );
}

export default HamburgerDrawer;
