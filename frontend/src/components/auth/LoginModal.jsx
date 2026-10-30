
import { useState } from "react";
import {
  X,
  Mail,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CarFront,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import ModalShell from "../common/ModalShell.jsx";

function LoginModal({ onClose, setToast }) {
  const [method, setMethod] = useState("mobile");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("contact");

  const handleSendOtp = (e) => {
    e.preventDefault();

    const value = contact.trim();

    if (method === "mobile" && !/^[6-9]\d{9}$/.test(value)) {
      setToast("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (
      method === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setToast("Please enter a valid email address.");
      return;
    }

    setStep("otp");
    setToast("OTP screen preview. Connect an OTP service to send a real code.");
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setToast("Please enter a valid 6-digit OTP.");
      return;
    }

    setToast("OTP verification backend is not connected yet.");
  };

  return (
    <ModalShell onClose={onClose}>
      <style>{`
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes lightFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(16px, -12px); }
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(14px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .carbyke-login {
          box-sizing: border-box;
          animation: cardEnter .45s ease-out both;
        }

        .carbyke-light {
          animation: lightFloat 6s ease-in-out infinite;
        }

        .carbyke-screen {
          animation: fadeSlide .3s ease-out both;
        }

        .carbyke-field {
          transition: border-color .25s, box-shadow .25s, background .25s;
        }

        .carbyke-field:focus-within {
          border-color: #e50914;
          background: rgba(229, 9, 20, .045);
          box-shadow: 0 0 0 3px rgba(229, 9, 20, .12);
        }

        .carbyke-submit {
          background: linear-gradient(110deg, #b9000b, #ed101d, #b9000b);
          background-size: 200% auto;
          transition: all .3s ease;
        }

        .carbyke-submit:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(229, 9, 20, .28);
        }

        .carbyke-submit:active {
          transform: scale(.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .carbyke-login, .carbyke-light, .carbyke-screen {
            animation: none !important;
          }
          .carbyke-field, .carbyke-submit {
            transition: none !important;
          }
        }
      `}</style>

      <div className="carbyke-login relative box-border w-full min-w-0 max-w-[460px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0d] text-white shadow-2xl">

        {/* Animated background lights */}
        <div className="carbyke-light pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-600/20 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-red-700/15 blur-[90px]" />

        <div className="relative z-10 min-w-0 p-5 sm:p-8">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-900 shadow-lg shadow-red-900/30">
                <CarFront size={27} />
              </div>

              <div>
                <h2 className="text-lg font-black tracking-[2px]">
                  CAR<span className="text-red-500">BYKE</span>
                </h2>
                <p className="text-[9px] tracking-[3px] text-gray-500">
                  DRIVE YOUR DREAM
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close login"
              className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 transition duration-300 hover:rotate-90 hover:bg-red-600 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {step === "contact" ? (
            <div key="contact" className="carbyke-screen">
              <div className="mb-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-red-400">
                  <Sparkles size={12} />
                  Secure sign in
                </div>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Welcome <span className="text-red-500">Back.</span>
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Enter your email or mobile number. We will use OTP
                  verification for sign in.
                </p>
              </div>

              {/* Choose login method */}
              <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setMethod("mobile");
                    setContact("");
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg px-2 py-3 text-xs font-bold transition-all duration-300 ${
                    method === "mobile"
                      ? "bg-red-600 text-white shadow-lg shadow-red-900/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Smartphone size={16} />
                  Mobile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMethod("email");
                    setContact("");
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg px-2 py-3 text-xs font-bold transition-all duration-300 ${
                    method === "email"
                      ? "bg-red-600 text-white shadow-lg shadow-red-900/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Mail size={16} />
                  Email
                </button>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
                    {method === "mobile" ? "Mobile Number" : "Email Address"}
                  </label>

                  <div className="carbyke-field flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    {method === "mobile" ? (
                      <>
                        <Smartphone size={19} className="shrink-0 text-red-500" />
                        <span className="shrink-0 border-r border-white/10 pr-3 text-sm text-gray-400">
                          +91
                        </span>
                      </>
                    ) : (
                      <Mail size={19} className="shrink-0 text-red-500" />
                    )}

                    <input
                      required
                      type={method === "mobile" ? "tel" : "email"}
                      inputMode={method === "mobile" ? "numeric" : "email"}
                      maxLength={method === "mobile" ? 10 : 100}
                      value={contact}
                      onChange={(e) =>
                        setContact(
                          method === "mobile"
                            ? e.target.value.replace(/\D/g, "")
                            : e.target.value
                        )
                      }
                      placeholder={
                        method === "mobile"
                          ? "Enter 10-digit number"
                          : "Enter your email address"
                      }
                      className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="carbyke-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-extrabold tracking-wide text-white"
                >
                  SEND OTP
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </form>
            </div>
          ) : (
            <div key="otp" className="carbyke-screen">
              <button
                type="button"
                onClick={() => {
                  setStep("contact");
                  setOtp("");
                }}
                className="mb-6 flex items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-red-400"
              >
                <ArrowLeft size={15} />
                Change email or mobile
              </button>

              <div className="mb-7">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500">
                  <LockKeyhole size={27} />
                </div>

                <h1 className="text-3xl font-black">
                  Verify <span className="text-red-500">OTP.</span>
                </h1>

                <p className="mt-3 break-all text-sm leading-6 text-gray-400">
                  Enter the 6-digit verification code for{" "}
                  <span className="font-semibold text-white">{contact}</span>.
                </p>
              </div>

              <form onSubmit={handleVerify} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
                    6-Digit OTP
                  </label>

                  <input
                    required
                    autoFocus
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="• • • • • •"
                    className="carbyke-field w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-2xl font-black tracking-[.65em] text-white outline-none placeholder:text-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="carbyke-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-extrabold tracking-wide text-white"
                >
                  VERIFY OTP
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </form>
            </div>
          )}

          {/* Footer */}
          <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-6">
            <ShieldCheck size={16} className="shrink-0 text-green-500" />
            <p className="text-center text-[11px] text-gray-500">
              Secure experience powered by CARBYKE
            </p>
          </div>

        </div>
      </div>
    </ModalShell>
  );
}

export default LoginModal;

