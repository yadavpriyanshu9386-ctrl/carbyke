
import { useState } from "react";
import { Star, MessageSquareQuote, Send } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    message: "CARBYKE par vehicle search karna bahut easy tha. Website ka design bhi kaafi premium hai.",
    date: "October 2026",
  },
  {
    id: 2,
    name: "Aman Kumar",
    rating: 4,
    message: "Cars aur bikes ki listings ek hi jagah milna kaafi useful hai. Overall good experience!",
    date: "October 2026",
  },
  {
    id: 3,
    name: "Neha Singh",
    rating: 5,
    message: "Simple interface aur easy navigation. CARBYKE ka concept bahut achha laga.",
    date: "October 2026",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) /
    reviews.length
  ).toFixed(1);

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

    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            CUSTOMER FEEDBACK
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            What People Say About{" "}
            <span className="text-red-500">CARBYKE</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Your experience matters to us. Share your feedback and help us
            make CARBYKE better.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <div className="text-5xl font-black text-red-500">
            {averageRating}
            <span className="text-2xl text-slate-400">/5</span>
          </div>

          <div className="mt-3 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={22}
                className={
                  star <= Math.round(Number(averageRating))
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-600"
                }
              />
            ))}
          </div>

          <p className="mt-3 text-slate-400">
            Based on {reviews.length} reviews
          </p>
        </div>

        {/* Review Form */}
        <div className="mb-14 grid gap-10 lg:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Share Your Experience
            </h2>

            <p className="mt-3 text-slate-400">
              Tell us what you think about CARBYKE.
              Your feedback helps us improve.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Your Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  maxLength={50}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm text-slate-300">
                  Your Rating
                </label>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        size={30}
                        className={
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-600"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Your Review
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your experience..."
                  rows={4}
                  maxLength={500}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-red-500"
                />

                <p className="mt-1 text-right text-xs text-slate-500">
                  {message.length}/500
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold transition hover:bg-red-700"
              >
                <Send size={17} />
                Submit Review
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-400">
                  Review added successfully!
                </p>
              )}
            </form>
          </div>

          {/* Review Info */}
          <div className="flex flex-col justify-center rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/50 to-black p-8">
            <MessageSquareQuote
              size={55}
              className="text-red-500"
            />

            <h2 className="mt-7 text-3xl font-bold">
              Your Voice Makes Us Better.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              At CARBYKE, we believe buying, selling and renting
              vehicles should be simple and convenient. Your
              suggestions help us build a better marketplace.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                CARBYKE
              </p>
              <p className="mt-1 text-xl font-bold text-red-500">
                Drive Your Choice.
              </p>
            </div>
          </div>
        </div>

        {/* All Reviews */}
        <div>
          <h2 className="mb-7 text-2xl font-bold">
            Customer Reviews
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-600"
                      }
                    />
                  ))}
                </div>

                <p className="my-5 leading-7 text-slate-300">
                  "{review.message}"
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
