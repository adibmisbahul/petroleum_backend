require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//router
const loginUser = require("./router/login");
const registerUser = require("./router/register");
const testing = require("./router/testing");
const upload = require("./router/upload");

app.use("/images", express.static(path.join(__dirname, "../public/uploads")));

//router path
app.use("/login", loginUser);
app.use("/register", registerUser);
app.use("/testing", testing);
app.use("/api", upload);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
