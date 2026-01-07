const express = require("express");
const router = express.Router();
const db = require("../config/db");

const handleUser = require("../models/handleUser");

router.post("", async (req, res) => {
  const { nama, password } = req.body;
  try {
    if (!nama || !password) {
      res.json("nama dan password tidak boleh kosong");
    }

    const cekReadyUsers = await handleUser.findUser(nama);

    if (cekReadyUsers.length > 0) {
      return res.status(409).json({ error: "nama sudah digunakan" });
    }

    const newUsers = await db.any("insert into users (nama , password) values ($1, $2)", [
      nama,
      password,
    ]);

    res.status(201).json({
      message: "user berhasil dibuat",
      user: newUsers,
    });
    return newUsers;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
