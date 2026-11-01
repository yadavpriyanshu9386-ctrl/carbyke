
import { useEffect, useState } from "react";

function VideoBackground({ src }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#08080b]">

      <video
        key={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover
          transition-opacity duration-[2500ms] ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-black/50" />

    </div>
  );
}

export default VideoBackground;

