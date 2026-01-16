const models = require("../models/handleUser");
const jwt = require("jsonwebtoken");

const handleLoginUser = async (req, res) => {
  const { nama, password } = req.body;
  try {
    if (!nama || !password) {
      return res
        .status(401)
        .json({ message: "username and password not null" });
    }
    const user = await models.handleLoginUser(nama, password);
    if (user.length === 0) {
      return res.status(401).json({ message: "incorect username or password" });
    }
    const payload = {
      id: user[0].id,
      nama: user[0].nama,
      email: user[0].email,
      phone_number: user[0].phone_number,
      date: Date.now(),
    };
    const secretKey = process.env.JWT_KEY;
    const expiresIn = 60 * 60 * 1;
    const token = jwt.sign(payload, secretKey, { expiresIn: expiresIn });

    res.status(200).json({
      login: true,
      message: "login sucess full",
      data: {
        id: user[0].id,
        nama: user[0].nama,
        email: user[0].email,
        phone_number: user[0].phone_number,
      },
      token: token,
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

  const newUser = handleUser.handleCreateNewUser(
    nama,
    password,
    email,
    phone_number
  );
};

module.exports = { handleLoginUser, handleRegisterUser };
