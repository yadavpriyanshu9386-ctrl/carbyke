// MOCK authentication (SRS: FR-UM-01, FR-UM-02).
// Replace sendOtp/verifyOtp with real calls (POST /auth/otp/send, /auth/otp/verify) in step A11.
// Session shape: { phone, name, role }  where role is "buyer" or "seller".

const SESSION_KEY = "drivedeals_session";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function isValidIndianMobile(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export async function sendOtp() {
  await delay(500);
}

// Demo mode: any 6-digit code is accepted.
export async function verifyOtp(phone, otp) {
  await delay(500);
  return /^\d{6}$/.test(otp);
}

export function saveSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* storage unavailable */
  }
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}
