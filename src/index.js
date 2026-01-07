const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//router
const loginUser = require("./router/login");
const registerUser = require("./router/register");
const testing = require("./router/testing");

//router path
app.use("/loginUser", loginUser);
app.use("/registerUser", registerUser);
app.use("/testing", testing);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
