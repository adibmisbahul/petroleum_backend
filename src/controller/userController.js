const handleUser = require("../models/handleUser");

const handleLoginUser = async (req, res) => {
  const { nama, password } = req.body;
  try {
    if (!nama || !password) {
      res.status(400).json("nama atau password tidak boleh kosong");
    }
    const user = await handleUser.handleLoginUser(nama, password);
    if (user.length === 0) {
      res.send("password atau username salah");
    }

    res.status(200).json({
      message: "login berhasil",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const handleRegisterUser = async (req, res) => {
  const { nama, password, email, phone_number } = req.body;
  if (!nama || !password || !email || !phone_number) {
    res.status(401).json({ message: "please insert data" });
  }

  // const cekReadyUser = ;

  const newUser = handleUser.handleCreateNewUser(nama, password, email, phone_number);
};

module.exports = { handleLoginUser, handleRegisterUser };
