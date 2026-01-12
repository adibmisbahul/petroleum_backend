const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "user-avatar-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Endpoint: POST /api/upload
router.post("/upload", upload.single("avatar"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Tidak ada file yang diupload");
  }

  // URL ini mengarah ke BACKEND (Port 3000), bukan Frontend (5173)
  // React nanti akan menampilkan: <img src="http://localhost:3000/images/..." />
  const fileUrl = `http://localhost:3000/images/${req.file.filename}`;

  res.json({
    message: "Upload berhasil!",
    url: fileUrl,
  });
});

module.exports = router;
