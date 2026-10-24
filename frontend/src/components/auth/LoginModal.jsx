import {
  X,
} from "lucide-react";
import ModalShell from "../common/ModalShell.jsx";

function LoginModal({ onClose, setToast }) {
  return (
    <ModalShell onClose={onClose}>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold">
            Welcome to Drive<span className="text-red">Deals</span>
          </h2>
          <button onClick={() => onClose()}>
            <X />
          </button>
        </div>
        <p className="mb-5 text-sm text-slate-400">
          Sign in to save vehicles and manage your listings.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            setToast(
              "Demo sign-in: connect an authentication service to enable accounts.",
            );
          }}
        >
          <label className="filter-label">Email or mobile number</label>
          <input
            required
            className="field"
            placeholder="Enter email or mobile"
          />
          <label className="filter-label mt-4">Password</label>
          <input
            required
            type="password"
            className="field"
            placeholder="Enter password"
          />
          <button className="mt-5 w-full rounded-lg bg-red py-3 font-bold">
            Login / Sign Up
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">
          Demo UI only — authentication is not connected.
        </p>
      </div>
    </ModalShell>
  );
}

export default LoginModal;
