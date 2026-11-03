import { useEffect, useRef } from "react";

function PageRoll({ children }) {
  const sheetRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const updateRoll = () => {
      if (!sheetRef.current) return;

      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;

      // 0° se 180° tak winding
      const angle = progress * 180;

      sheetRef.current.style.setProperty("--paper-progress", progress);
      sheetRef.current.style.setProperty("--paper-angle", `${angle}deg`);
    };

    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(updateRoll);
    };

    updateRoll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateRoll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateRoll);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="cb-paper-system">
      <div className="cb-paper-rod" aria-hidden="true">
        <div className="cb-paper-rod-cap cb-paper-rod-cap-left" />
        <div className="cb-paper-rod-body" />
        <div className="cb-paper-rod-cap cb-paper-rod-cap-right" />
      </div>

      <div ref={sheetRef} className="cb-paper-sheet" data-paper-roll>
        <div className="cb-paper-wrap" aria-hidden="true" />
        <div className="cb-paper-content">{children}</div>
      </div>
    </div>
  );
}

export default PageRoll;
