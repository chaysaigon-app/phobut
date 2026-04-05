// ═══════════════════════════════════════════════════════════════
//  config.js — Vegans Da Nang · Single Source of Truth
//  Tất cả biến cấu hình tập trung tại đây.
//  Các file HTML import từ đây, KHÔNG hardcode bất kỳ key nào.
// ═══════════════════════════════════════════════════════════════

// ── Firebase Config (Dùng Database của Phở Bút) ──────────────
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA0zujbTZbHe_7gAe_y9QkrcR4qXKC6Abo",
  authDomain: "phobut-95574.firebaseapp.com",
  projectId: "phobut-95574",
  storageBucket: "phobut-95574.appspot.com",
  messagingSenderId: "1074182475091",
  appId: "1:1074182475091:web:32ad6ef9717256b88f25a6"
};

// ── Quản trị viên tối cao (Super Admin) ─────────────────────
// Email này có toàn quyền hệ thống (HQ)
export const SUPER_ADMIN_EMAIL = "chaysaigon@gmail.com";

// ── Thiết lập ứng dụng ──────────────────────────────────────
export const APP_NAME = "Vegans Da Nang";
export const APP_LOGO_EMOJI = "🌿";
export const DEFAULT_VAT = 10; // % — dùng khi branch chưa cấu hình VAT

// ── Cloudinary (Upload ảnh) ─────────────────────────────────
export const CLOUDINARY_CLOUD_NAME = "dym7dwnji";
export const CLOUDINARY_UPLOAD_PRESET = "qjrpdbhs";

// ── EmailJS (Gửi hoá đơn / báo cáo PDF qua email) ───────────
// Đăng ký tại https://www.emailjs.com/ để lấy các giá trị này
export const EMAILJS_CONFIG = {
  serviceId: "service_j8kubcd",        
  invoiceTemplate: "template_pbqe9ew", 
  reportTemplate: "template_3ee7url",  
  publicKey: "67fQLu2LTz1bZmT5L"       
};

// ── Mặc định rỗng cho Marketplace ───────────────────────────
export const DEFAULT_BRANCH_ID = "";
