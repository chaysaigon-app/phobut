// ═══════════════════════════════════════════════════════════════
//  config.js — Vegans Da Nang · Single Source of Truth
//  ⚠️  Đây là file duy nhất bạn cần chỉnh khi deploy
// ═══════════════════════════════════════════════════════════════

export const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA0zujbTZbHe_7gAe_y9QkrcR4qXKC6Abo",
  authDomain:        "phobut-95574.firebaseapp.com",
  projectId:         "phobut-95574",
  storageBucket:     "phobut-95574.appspot.com",
  messagingSenderId: "1074182475091",
  appId:             "1:1074182475091:web:32ad6ef9717256b88f25a6"
};

// ── Tài khoản Super Admin ──────────────────────────────────────
export const SUPER_ADMIN_EMAIL = "chaysaigon@gmail.com";

// ── Thông tin App ──────────────────────────────────────────────
export const APP_NAME       = "Vegans Da Nang";
export const APP_LOGO_EMOJI = "🌿";
export const DEFAULT_VAT    = 10; // %

// ── reCAPTCHA v3 (public key — an toàn để ở frontend) ─────────
export const RECAPTCHA_SITE_KEY = "6LctcKcsAAAAAADXXmFTG2mxgwWbmB9KFW2UpuSS";

// ── Cloudinary (upload preset public — an toàn) ───────────────
export const CLOUDINARY_CLOUD_NAME    = "dym7dwnji";
export const CLOUDINARY_UPLOAD_PRESET = "qjrpdbhs";

// ── EmailJS ───────────────────────────────────────────────────
export const EMAILJS_CONFIG = {
  serviceId:       "service_j8kubcd",
  invoiceTemplate: "template_pbqe9ew",
  reportTemplate:  "template_3ee7url",
  publicKey:       "67fQLu2LTz1bZmT5L"
};

// ── Anthropic API Key ─────────────────────────────────────────
// Chỉ dùng trong data-extractor.html trên máy cá nhân.
// KHÔNG deploy file data-extractor.html lên hosting public.
// Lấy key tại: https://console.anthropic.com/
export const ANTHROPIC_API_KEY = "phu-nguyen-first-key"; // ← Điền key vào đây
