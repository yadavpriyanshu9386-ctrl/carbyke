import { useEffect, useState } from "react";
import {
  Star,
  MessageSquareQuote,
  Send,
  Sparkles,
  Quote,
  Heart,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    message:
      "CARBYKE par vehicle search karna bahut easy tha. Website ka design bhi kaafi premium hai.",
    date: "October 2026",
  },
  {
    id: 2,
    name: "Aman Kumar",
    rating: 4,
    message:
      "Cars aur bikes ki listings ek hi jagah milna kaafi useful hai. Overall good experience!",
    date: "October 2026",
  },
  {
    id: 3,
    name: "Neha Singh",
    rating: 5,
    message:
      "Simple interface aur easy navigation. CARBYKE ka concept bahut achha laga.",
    date: "October 2026",
  },
];

// Background decorative particles
const bubbles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  size: 5 + ((i * 19) % 65),
  left: (i * 41) % 100,
  delay: (i * 1.37) % 25,
  duration: 12 + ((i * 7) % 20),
}));

const stars = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  left: (i * 31 + 7) % 100,
  top: (i * 47 + 13) % 100,
  size: 2 + ((i * 3) % 4),
  delay: (i * 0.23) % 6,
  duration: 2 + ((i * 5) % 5),
}));

const floatingElements = [
  { text: "01", left: "8%", top: "18%", delay: "0s" },
  { text: "05", left: "85%", top: "12%", delay: "1s" },
  { text: "100%", left: "78%", top: "43%", delay: "2s" },
  { text: "★", left: "13%", top: "63%", delay: "1.5s" },
  { text: "CAR", left: "88%", top: "72%", delay: "2.5s" },
  { text: "BYKE", left: "5%", top: "88%", delay: "0.5s" },
  { text: "★★★★★", left: "70%", top: "88%", delay: "3s" },
  { text: "EXPERIENCE", left: "38%", top: "10%", delay: "1.8s" },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  const averageRating = reviews.length
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ).toFixed(1)
    : "0.0";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      }),
    };

    setReviews((old) => [newReview, ...old]);
    setName("");
    setRating(5);
    setMessage("");
    setSubmitted(true);
  };

  return (
    <main className="reviews-page relative min-h-screen overflow-hidden bg-[#050507] px-4 py-16 text-white sm:px-8">
      {/* BACKGROUND ANIMATIONS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Main red glows */}
        <div className="review-glow review-glow-one" />
        <div className="review-glow review-glow-two" />
        <div className="review-glow review-glow-three" />

        {/* Floating bubbles */}
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="review-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}

        {/* Twinkling stars */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="review-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {/* Floating text and numbers */}
        {floatingElements.map((element, index) => (
          <span
            key={index}
            className="review-floating-text"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
            }}
          >
            {element.text}
          </span>
        ))}

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050507]/45 to-black/80" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:55px_55px]" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HERO HEADER */}
        <section className="review-reveal mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-5 py-2.5 shadow-[0_0_25px_rgba(220,38,38,0.12)] backdrop-blur-xl">
            <Sparkles size={15} className="text-red-400" />

            <span className="text-[10px] font-black uppercase tracking-[3px] text-red-300">
              Customer Feedback
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            YOUR VOICE.
            <br />
            <span className="review-gradient-text">OUR DRIVE.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Every experience matters. Share your journey with CARBYKE and help
            us build a better vehicle marketplace.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
            <Star size={14} className="fill-red-500 text-red-500" />
            <span className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500">
              Real Experiences · Real Feedback
            </span>
            <Star size={14} className="fill-red-500 text-red-500" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
          </div>
        </section>

        {/* RATING SUMMARY */}
        <section className="review-reveal review-glass-panel mb-14 overflow-hidden rounded-[28px] p-7 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="text-center md:border-r md:border-white/10">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[3px] text-gray-500">
                Overall Rating
              </p>

              <h2 className="review-gradient-text text-6xl font-black">
                {averageRating}
                <span className="text-2xl text-gray-500">/5</span>
              </h2>

              <div className="mt-4 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={21}
                    className={
                      star <= Math.round(Number(averageRating))
                        ? "fill-red-400 text-red-400"
                        : "text-gray-700"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="text-center md:border-r md:border-white/10">
              <div className="mb-3 flex justify-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10">
                  <MessageSquareQuote className="text-red-400" size={23} />
                </div>
              </div>

              <h3 className="text-4xl font-black text-white">
                {reviews.length}
              </h3>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                Total Reviews
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10">
                  <TrendingUp className="text-red-400" size={23} />
                </div>
              </div>

              <h3 className="text-4xl font-black text-red-400">
                {reviews.length
                  ? Math.round(
                      (reviews.filter((r) => r.rating >= 4).length /
                        reviews.length) *
                        100,
                    )
                  : 0}
                %
              </h3>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                4–5 Star Reviews
              </p>
            </div>
          </div>
        </section>

        {/* REVIEW FORM + INFO */}
        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* FORM */}
          <div className="review-reveal review-glass-panel rounded-[28px] p-6 sm:p-8">
            <div className="mb-7">
              <span className="text-[10px] font-black uppercase tracking-[3px] text-red-400">
                Share Your Story
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Tell Us Your{" "}
                <span className="review-gradient-text">Experience.</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Your honest feedback helps CARBYKE improve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-[2px] text-gray-400">
                  Your Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  maxLength={50}
                  required
                  className="review-input w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-red-500/60 focus:shadow-[0_0_20px_rgba(220,38,38,0.12)]"
                />
              </div>

              {/* RATING */}
              <div>
                <label className="mb-3 block text-[10px] font-black uppercase tracking-[2px] text-gray-400">
                  Select Your Rating
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} stars`}
                      aria-pressed={rating === star}
                      className="transition-all duration-200 hover:scale-125 active:scale-95"
                    >
                      <Star
                        size={29}
                        className={
                          star <= rating
                            ? "fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                            : "text-gray-600"
                        }
                      />
                    </button>
                  ))}

                  <span className="ml-auto text-xs font-black text-red-400">
                    {rating}.0 / 5
                  </span>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-[2px] text-gray-400">
                  Your Review
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write about your experience with CARBYKE..."
                  rows={5}
                  maxLength={500}
                  required
                  className="review-input w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm leading-6 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-red-500/60 focus:shadow-[0_0_20px_rgba(220,38,38,0.12)]"
                />

                <p className="mt-2 text-right text-[10px] font-bold tracking-wider text-gray-500">
                  {message.length} / 500
                </p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="review-submit-button group flex w-full items-center justify-center gap-3 rounded-xl border border-red-400/40 bg-gradient-to-r from-red-700 via-red-600 to-red-800 py-4 text-xs font-black uppercase tracking-[2px] text-white shadow-[0_8px_25px_rgba(220,38,38,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(220,38,38,0.40)] active:translate-y-0"
              >
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                Submit Review
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm font-semibold text-green-400"
                >
                  Your review has been added successfully!
                </p>
              )}
            </form>
          </div>

          {/* INFO PANEL */}
          <div className="review-reveal review-info-panel relative flex flex-col justify-center overflow-hidden rounded-[28px] border border-red-500/20 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-[90px]" />

            <div className="relative">
              <div className="mb-7 grid h-16 w-16 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 shadow-[0_0_35px_rgba(220,38,38,0.15)]">
                <MessageSquareQuote size={32} className="text-red-400" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-[3px] text-red-400">
                Your Feedback Matters
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                YOUR VOICE
                <br />
                <span className="review-gradient-text">MAKES US BETTER.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-gray-400">
                At CARBYKE, we believe buying, selling and renting vehicles
                should be simple and convenient. Your suggestions help us build
                a better marketplace.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <ShieldCheck className="mb-3 text-red-400" size={23} />
                  <p className="text-xs font-black text-white">Your Opinion</p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    Matters to us
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <Heart className="mb-3 text-red-400" size={23} />
                  <p className="text-xs font-black text-white">
                    Built Together
                  </p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    Better every day
                  </p>
                </div>
              </div>

              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500">
                  CARBYKE
                </p>

                <p className="review-gradient-text mt-2 text-2xl font-black">
                  DRIVE YOUR CHOICE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section className="review-reveal">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[3px] text-red-400">
                Community Stories
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                CUSTOMER <span className="review-gradient-text">REVIEWS.</span>
              </h2>
            </div>

            <p className="text-xs font-semibold text-gray-500">
              {reviews.length} TOTAL EXPERIENCES
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={review.id}
                className="review-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171014]/90 via-[#101014]/95 to-black p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_15px_45px_rgba(220,38,38,0.12)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/25" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          className={
                            star <= review.rating
                              ? "fill-red-400 text-red-400"
                              : "text-gray-700"
                          }
                        />
                      ))}
                    </div>

                    <Quote size={24} className="text-red-500/50" />
                  </div>

                  <p className="min-h-[115px] text-sm leading-7 text-gray-300">
                    "{review.message}"
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600/30 to-black text-sm font-black text-red-300">
                      {review.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-extrabold text-white">
                        {review.name}
                      </p>

                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                        {review.date}
                      </p>
                    </div>

                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-2 py-1 text-[9px] font-black text-red-400">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOTTOM BRAND STRIP */}
        <section className="mt-16 overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-950/40 via-black to-red-950/40 px-5 py-7 text-center">
          <p className="text-[10px] font-black uppercase tracking-[4px] text-gray-500">
            Thank You For Being Part Of
          </p>

          <h2 className="review-gradient-text mt-3 text-3xl font-black tracking-[3px] sm:text-4xl">
            CARBYKE
          </h2>

          <p className="mt-2 text-xs font-semibold tracking-wider text-gray-400">
            DRIVE YOUR CHOICE.
          </p>
        </section>
      </div>

      {/* PAGE ANIMATION STYLES */}
      <style>{`
        .reviews-page {
          isolation: isolate;
          font-family: Inter, "Segoe UI", sans-serif;
        }

        .review-gradient-text {
          background: linear-gradient(
            100deg,
            #ffffff 0%,
            #fca5a5 28%,
            #ef4444 55%,
            #f8fafc 82%,
            #dc2626 100%
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: reviewTextShine 7s linear infinite;
        }

        @keyframes reviewTextShine {
          to {
            background-position: 250% center;
          }
        }

        .review-glow {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          filter: blur(110px);
          animation: reviewGlow 13s ease-in-out infinite alternate;
        }

        .review-glow-one {
          left: -160px;
          top: 5%;
          background: rgba(220, 38, 38, .30);
        }

        .review-glow-two {
          right: -180px;
          top: 35%;
          background: rgba(185, 28, 28, .24);
          animation-delay: -4s;
        }

        .review-glow-three {
          bottom: -150px;
          left: 30%;
          background: rgba(127, 29, 29, .22);
          animation-delay: -8s;
        }

        @keyframes reviewGlow {
          from {
            transform: translate3d(-25px, -15px, 0) scale(.85);
          }
          to {
            transform: translate3d(50px, 55px, 0) scale(1.25);
          }
        }

        .review-bubble {
          position: absolute;
          bottom: -100px;
          display: block;
          border: 1px solid rgba(248, 113, 113, .28);
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 25%,
            rgba(255, 190, 190, .20),
            rgba(220, 38, 38, .09) 45%,
            transparent 75%
          );
          box-shadow:
            inset 0 0 15px rgba(239, 68, 68, .12),
            0 0 20px rgba(220, 38, 38, .08);
          animation: reviewBubbleFloat linear infinite;
        }

        @keyframes reviewBubbleFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(.65);
          }
          50% {
            transform: translate3d(35px, -55vh, 0) scale(1.2);
          }
          100% {
            transform: translate3d(-25px, -115vh, 0) scale(.8);
          }
        }

        .review-star {
          position: absolute;
          border-radius: 50%;
          background: #fecaca;
          box-shadow:
            0 0 5px rgba(255, 255, 255, .7),
            0 0 12px rgba(239, 68, 68, .8);
          animation: reviewTwinkle ease-in-out infinite;
        }

        @keyframes reviewTwinkle {
          0%, 100% {
            opacity: .12;
            transform: scale(.6);
          }
          50% {
            opacity: 1;
            transform: scale(1.7);
          }
        }

        .review-floating-text {
          position: absolute;
          color: rgba(248, 113, 113, .16);
          font-size: clamp(11px, 1.5vw, 19px);
          font-weight: 900;
          letter-spacing: 4px;
          white-space: nowrap;
          animation: reviewTextFloat 7s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(220, 38, 38, .18);
        }

        @keyframes reviewTextFloat {
          0%, 100% {
            transform: translateY(0) rotate(-4deg);
            opacity: .3;
          }
          50% {
            transform: translateY(-22px) rotate(4deg);
            opacity: .8;
          }
        }

        .review-glass-panel {
          border: 1px solid rgba(255, 255, 255, .11);
          background:
            radial-gradient(ellipse at 100% 0%, rgba(220, 38, 38, .12), transparent 50%),
            linear-gradient(145deg, rgba(25, 17, 21, .86), rgba(9, 9, 12, .94));
          backdrop-filter: blur(20px);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, .28),
            inset 0 1px rgba(255, 255, 255, .04);
        }

        .review-info-panel {
          background:
            radial-gradient(ellipse at 100% 0%, rgba(220,38,38,.23), transparent 55%),
            linear-gradient(145deg, rgba(45, 9, 17, .95), rgba(5, 5, 7, .98));
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
        }

        .review-input::placeholder {
          color: #64646e;
        }

        .review-submit-button {
          background-size: 200% auto;
          background-position: left center;
        }

        .review-submit-button:hover {
          background-position: right center;
        }

        .review-reveal {
          animation: reviewReveal .9s cubic-bezier(.2,.7,.2,1) both;
        }

        @keyframes reviewReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .review-card {
          animation: reviewCardEnter .7s ease both;
        }

        @keyframes reviewCardEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-bubble,
          .review-star,
          .review-glow,
          .review-floating-text,
          .review-gradient-text,
          .review-reveal,
          .review-card {
            animation: none !important;
          }

          .reviews-page *,
          .reviews-page *::before,
          .reviews-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
