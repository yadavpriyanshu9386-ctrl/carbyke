import { useState } from "react";
import {
  X,
  Mail,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CarFront,
  Bike,
  LockKeyhole,
  Sparkles,
  UserRound,
  Eye,
  EyeOff,
  UserCog,
  KeyRound,
  Fingerprint,
} from "lucide-react";
import ModalShell from "../common/ModalShell.jsx";

function LoginModal({ onClose, setToast }) {
  const [loginType, setLoginType] = useState("");
  const [method, setMethod] = useState("mobile");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState("select");

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (method === "mobile" && !/^[6-9]\d{9}$/.test(contact.trim())) {
      setToast("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (
      method === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim())
    ) {
      setToast("Please enter a valid email address.");
      return;
    }

    setStep("otp");
    setToast("OTP preview only. Connect an OTP service to send a real code.");
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setToast("Please enter a valid 6-digit OTP.");
      return;
    }

    setToast("OTP backend is not connected yet.");
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setToast("Enter your username and password.");
      return;
    }

    setToast("Admin authentication backend is not connected yet.");
  };

  const changeType = (type) => {
    setLoginType(type);
    setStep("login");
    setContact("");
    setOtp("");
    setUsername("");
    setPassword("");
  };

  const goBack = () => {
    setLoginType("");
    setStep("select");
    setContact("");
    setOtp("");
    setUsername("");
    setPassword("");
  };

  return (
    <ModalShell onClose={onClose}>
      <style>{`
        @keyframes cbEnter {
          from { opacity:0; transform:translateY(35px) scale(.95); }
          to { opacity:1; transform:translateY(0) scale(1); }
        }

        @keyframes cbFloat {
          0%,100% { transform:translate(0,0); }
          50% { transform:translate(18px,-25px); }
        }

        @keyframes cbRise {
          0% { transform:translateY(30px) scale(.7); opacity:0; }
          25%,75% { opacity:.7; }
          100% { transform:translateY(-100px) scale(1.2); opacity:0; }
        }

        @keyframes cbGradient {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }

        @keyframes cbGlow {
          0%,100% { box-shadow:0 0 15px rgba(229,9,47,.15); }
          50% { box-shadow:0 0 35px rgba(229,9,47,.4); }
        }

        @keyframes cbShine {
          from { transform:translateX(-150%); }
          to { transform:translateX(250%); }
        }

        @keyframes cbScreen {
          from { opacity:0; transform:translateX(20px); }
          to { opacity:1; transform:translateX(0); }
        }

        .cb-modal {
          animation:cbEnter .55s cubic-bezier(.2,.8,.2,1) both;
        }

        .cb-gradient-text {
          background:linear-gradient(100deg,#fff,#bfc5ce,#ff304f,#fff,#e5092f);
          background-size:300% 300%;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation:cbGradient 5s ease infinite;
        }

        .cb-red-text {
          background:linear-gradient(90deg,#ff758c,#ff1744,#b90030,#ff758c);
          background-size:200% auto;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation:cbGradient 4s linear infinite;
        }

        .cb-silver-text {
          background:linear-gradient(90deg,#fff,#9ca3af,#fff);
          background-size:200% auto;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation:cbGradient 5s linear infinite;
        }

        .cb-bubble {
          position:absolute;
          border:1px solid rgba(255,255,255,.12);
          border-radius:50%;
          background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.2),rgba(229,9,47,.1),transparent 75%);
          pointer-events:none;
          animation:cbFloat 7s ease-in-out infinite;
        }

        .cb-bubble-a {
          height:70px;width:70px;top:15%;left:5%;
        }

        .cb-bubble-b {
          height:35px;width:35px;top:50%;right:7%;
          animation-delay:-2s;
        }

        .cb-bubble-c {
          height:95px;width:95px;bottom:5%;left:25%;
          animation-delay:-4s;
        }

        .cb-card {
          animation:cbScreen .4s ease both;
        }

        .cb-option {
          position:relative;
          overflow:hidden;
          transition:all .4s ease;
        }

        .cb-option:hover {
          transform:translateY(-7px) scale(1.02);
          border-color:rgba(255,40,75,.8);
          box-shadow:0 15px 40px rgba(229,9,47,.2);
        }

        .cb-option:hover .cb-option-icon {
          transform:scale(1.15) rotate(-5deg);
        }

        .cb-option-icon {
          transition:transform .4s ease;
        }

        .cb-field {
          transition:all .3s ease;
        }

        .cb-field:focus-within {
          border-color:#ed1745;
          background:rgba(229,9,47,.07);
          box-shadow:0 0 0 3px rgba(229,9,47,.12),0 0 22px rgba(229,9,47,.13);
          transform:translateY(-1px);
        }

        .cb-submit {
          position:relative;
          overflow:hidden;
          background:linear-gradient(110deg,#a90025,#ed123f,#b90030,#ed123f);
          background-size:250% 250%;
          animation:cbGradient 5s ease infinite,cbGlow 3s ease-in-out infinite;
          transition:all .3s ease;
        }

        .cb-submit:hover {
          transform:translateY(-3px);
          box-shadow:0 12px 35px rgba(229,9,47,.4);
        }

        .cb-submit:hover .cb-shine {
          animation:cbShine .8s ease;
        }

        .cb-tab {
          transition:all .3s ease;
        }

        @media(prefers-reduced-motion:reduce) {
          .cb-modal,.cb-gradient-text,.cb-red-text,.cb-silver-text,
          .cb-bubble,.cb-card,.cb-submit {
            animation:none !important;
          }
          .cb-option,.cb-field,.cb-tab {
            transition:none !important;
          }
        }
      `}</style>

      <div className="cb-modal relative mx-auto w-full max-w-[510px] overflow-hidden rounded-[30px] border border-red-500/30 bg-[#08090d] text-white shadow-[0_25px_100px_rgba(0,0,0,.85),0_0_55px_rgba(229,9,47,.13)]">
        {/* BACKGROUND LIGHTS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-red-800/20 blur-[100px]" />
          <div className="cb-bubble cb-bubble-a" />
          <div className="cb-bubble cb-bubble-b" />
          <div className="cb-bubble cb-bubble-c" />
        </div>

        <div className="relative z-10 p-5 sm:p-8">
          {/* HEADER */}
          <div className="mb-7 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              className="group flex items-center gap-3 text-left"
              aria-label="CARBYKE home login selection"
            >
              <div className="relative flex h-12 w-14 items-center justify-center rounded-xl border border-red-500/40 bg-gradient-to-br from-red-700/40 to-black shadow-[0_0_25px_rgba(229,9,47,.25)]">
                <CarFront size={27} className="absolute left-0 text-white" />
                <Bike size={25} className="absolute right-0 text-red-400" />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  <span className="cb-silver-text">CAR</span>
                  <span className="cb-gradient-text">BYKE</span>
                </h2>
                <p className="text-[9px] font-bold tracking-[3px] text-gray-400">
                  DRIVE YOUR DREAM
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close login"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition duration-300 hover:rotate-90 hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>

          {/* MAIN HEADING */}
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-black tracking-[2px] text-red-400">
              <Sparkles size={13} />
              THE PREMIUM EXPERIENCE
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-4xl">
              Welcome to
              <br />
              <span className="cb-gradient-text">CARBYKE WORLD</span>
            </h1>

            <p className="mt-3 text-xs leading-6 text-gray-400 sm:text-sm">
              <span className="cb-red-text font-bold">Buy.</span>{" "}
              <span className="cb-silver-text font-bold">Sell.</span>{" "}
              <span className="cb-red-text font-bold">Rent.</span> Your journey
              starts here.
            </p>
          </div>

          {/* LOGIN SELECTION SCREEN */}
          {step === "select" && (
            <div key="select" className="cb-card space-y-5">
              <div className="text-center">
                <h3 className="text-lg font-black">
                  Choose Your <span className="cb-red-text">Access</span>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Select your account type to continue
                </p>
              </div>

              {/* USER SEPARATE CARD */}
              <button
                type="button"
                onClick={() => changeType("user")}
                className="cb-option group w-full rounded-2xl border border-white/15 bg-gradient-to-r from-[#19151a] via-[#180b11] to-[#09090c] p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="cb-option-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-400/40 bg-gradient-to-br from-red-500/30 to-red-950 text-red-300 shadow-[0_0_20px_rgba(229,9,47,.15)]">
                    <UserRound size={29} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black">
                      <span className="cb-silver-text">USER</span>
                      <span className="ml-2 cb-red-text">LOGIN</span>
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      Access your vehicle marketplace account
                    </p>
                    <p className="mt-2 text-[10px] font-bold tracking-wider text-red-400">
                      MOBILE NUMBER / EMAIL
                    </p>
                  </div>

                  <ArrowRight className="shrink-0 text-red-400 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </button>

              {/* ADMIN SEPARATE CARD */}
              <button
                type="button"
                onClick={() => changeType("admin")}
                className="cb-option group w-full rounded-2xl border border-white/15 bg-gradient-to-r from-[#15171c] via-[#101116] to-[#09090c] p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="cb-option-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-400/30 bg-gradient-to-br from-gray-400/20 to-gray-900 text-gray-200 shadow-[0_0_20px_rgba(255,255,255,.08)]">
                    <ShieldCheck size={29} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-black">
                      <span className="cb-silver-text">ADMIN</span>
                      <span className="ml-2 cb-red-text">PORTAL</span>
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      Restricted administration dashboard
                    </p>
                    <p className="mt-2 text-[10px] font-bold tracking-wider text-gray-300">
                      AUTHORIZED ACCESS ONLY
                    </p>
                  </div>

                  <ArrowRight className="shrink-0 text-gray-300 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </button>
            </div>
          )}

          {/* USER LOGIN */}
          {loginType === "user" && step === "login" && (
            <div key="user" className="cb-card">
              <button
                type="button"
                onClick={goBack}
                className="mb-6 flex items-center gap-2 text-xs font-bold text-gray-400 transition hover:text-red-400"
              >
                <ArrowLeft size={16} /> BACK TO ACCESS
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-black">
                  <span className="cb-silver-text">USER</span>{" "}
                  <span className="cb-red-text">LOGIN</span>
                </h3>
                <p className="mt-2 text-xs text-gray-400">
                  Sign in with your registered contact details.
                </p>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMethod("mobile");
                    setContact("");
                  }}
                  className={`cb-tab flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold ${
                    method === "mobile"
                      ? "border-red-400 bg-red-600/20 text-red-300 shadow-[0_0_18px_rgba(229,9,47,.15)]"
                      : "border-white/10 bg-white/[0.03] text-gray-400"
                  }`}
                >
                  <Smartphone size={17} /> MOBILE
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMethod("email");
                    setContact("");
                  }}
                  className={`cb-tab flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold ${
                    method === "email"
                      ? "border-red-400 bg-red-600/20 text-red-300 shadow-[0_0_18px_rgba(229,9,47,.15)]"
                      : "border-white/10 bg-white/[0.03] text-gray-400"
                  }`}
                >
                  <Mail size={17} /> EMAIL
                </button>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                    <span className="cb-red-text">
                      {method === "mobile" ? "Mobile Number" : "Email Address"}
                    </span>
                  </label>

                  <div className="cb-field flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4">
                    {method === "mobile" ? (
                      <>
                        <Smartphone size={19} className="text-red-400" />
                        <span className="border-r border-white/15 pr-3 text-sm text-gray-300">
                          +91
                        </span>
                      </>
                    ) : (
                      <Mail size={19} className="text-red-400" />
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
                            : e.target.value,
                        )
                      }
                      placeholder={
                        method === "mobile"
                          ? "Enter mobile number"
                          : "Enter email address"
                      }
                      className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="cb-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-black tracking-[2px] text-white"
                >
                  <span className="cb-shine absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  CONTINUE
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </form>
            </div>
          )}

          {/* OTP SCREEN */}
          {loginType === "user" && step === "otp" && (
            <div key="otp" className="cb-card">
              <button
                type="button"
                onClick={() => {
                  setStep("login");
                  setOtp("");
                }}
                className="mb-6 flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-red-400"
              >
                <ArrowLeft size={16} /> CHANGE CONTACT
              </button>

              <div className="mb-7 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
                  <Fingerprint size={34} />
                </div>

                <h3 className="text-3xl font-black">
                  <span className="cb-silver-text">VERIFY</span>{" "}
                  <span className="cb-red-text">OTP</span>
                </h3>

                <p className="mt-3 break-all text-xs text-gray-400">
                  Verification code for{" "}
                  <span className="font-bold text-red-300">{contact}</span>
                </p>
              </div>

              <form onSubmit={handleVerify} className="space-y-5">
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
                  className="cb-field w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 text-center text-2xl font-black tracking-[.65em] text-white outline-none placeholder:text-gray-500"
                />

                <button
                  type="submit"
                  className="cb-submit flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-black tracking-wider text-white"
                >
                  VERIFY OTP <ArrowRight size={19} />
                </button>
              </form>
            </div>
          )}

          {/* ADMIN LOGIN */}
          {loginType === "admin" && step === "login" && (
            <div key="admin" className="cb-card">
              <button
                type="button"
                onClick={goBack}
                className="mb-6 flex items-center gap-2 text-xs font-bold text-gray-400 transition hover:text-red-400"
              >
                <ArrowLeft size={16} /> BACK TO ACCESS
              </button>

              <div className="mb-6 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-950/40 to-black p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400">
                    <ShieldCheck size={27} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      <span className="cb-silver-text">ADMIN</span>{" "}
                      <span className="cb-red-text">LOGIN</span>
                    </h3>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400">
                      SECURE CONTROL PANEL
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                    <span className="cb-red-text">Admin Username</span>
                  </label>

                  <div className="cb-field flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4">
                    <UserCog size={19} className="text-red-400" />
                    <input
                      required
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter admin username"
                      className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                    <span className="cb-red-text">Password</span>
                  </label>

                  <div className="cb-field flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-4">
                    <KeyRound size={19} className="text-red-400" />

                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="text-gray-400 transition hover:text-red-400"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      setToast(
                        "Admin password recovery will be connected later.",
                      )
                    }
                    className="text-xs font-bold text-red-400 transition hover:text-white hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="cb-submit group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-black tracking-[2px] text-white"
                >
                  ADMIN SIGN IN
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </form>
            </div>
          )}

          {/* FOOTER */}
          <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/10 pt-5">
            <ShieldCheck size={15} className="text-red-400" />
            <p className="text-center text-[9px] font-bold tracking-[1.5px] text-gray-400">
              SECURE EXPERIENCE •{" "}
              <span className="cb-red-text">POWERED BY CARBYKE</span>
            </p>
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

export default LoginModal;
