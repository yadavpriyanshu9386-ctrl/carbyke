
import { CarFront, X, Smartphone } from "lucide-react";
import { menuSections } from "./menuItems";
import MenuItem from "./MenuItem";

function HamburgerDrawer({
  open,
  onClose,
  navigate,
  wishlistCount = 0,
  isLoggedIn = false,
  onLogin,
}) {
  const handleSelect = (item) => {
    if (item.loginRequired && !isLoggedIn) {
      onClose();
      onLogin?.();
      return;
    }

    if (item.target) {
      navigate(item.target);
    }

    onClose();
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* DRAWER */}
      <aside
        aria-hidden={!open}
        className={`fixed left-0 top-0 z-[70] flex h-dvh w-[300px] max-w-[85vw] flex-col border-r border-white/10 bg-[#0c0c0e] shadow-2xl transition-transform duration-300 ease-in-out sm:w-[340px] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-5">
          <div className="flex items-center gap-2">
            <CarFront size={32} className="text-red-500" />

            <span className="text-xl font-black">
              CAR<span className="text-red-500">BYKE</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition hover:rotate-90 hover:bg-red-600"
          >
            <X size={19} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items
                  .filter(
                    (item) =>
                      !item.loginRequired || isLoggedIn
                  )
                  .map((item) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      onSelect={handleSelect}
                      wishlistCount={wishlistCount}
                    />
                  ))}
              </div>
            </div>
          ))}

          {/* APP DOWNLOAD */}
          <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/15 to-transparent p-4">
            <div className="mb-3 flex items-center gap-2">
              <Smartphone size={20} className="text-red-500" />
              <p className="text-sm font-bold">
                Download CARBYKE App
              </p>
            </div>

            <p className="mb-3 text-xs leading-5 text-gray-400">
              Your favourite vehicles, right at your fingertips.
            </p>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-lg bg-red-600/60 py-2.5 text-xs font-bold text-white"
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="shrink-0 border-t border-white/10 px-5 py-4">
          <p className="text-center text-[10px] tracking-wider text-gray-500">
            © CARBYKE · ALL RIGHTS RESERVED
          </p>
        </div>
      </aside>
    </>
  );
}

export default HamburgerDrawer;
