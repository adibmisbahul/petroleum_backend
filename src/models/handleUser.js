const db = require("../config/db");

const handleLoginUser = async (nama, password) => {
  return await db.any("select * from users where nama = $1 and password = $2", [nama, password]);
};

const findUser = async (nama) => {
  return await db.any("select * from users where nama = $1 ", [nama]);
};

const handleCreateNewUser = async (nama, password, email, phone_number) => {
  const createNewUser = await db.any(
    "insert into users (nama , password, email , phone_number) values ($1 , $2 , $3 , $4)",
    [nama, password, email, phone_number],
  );
};

module.exports = { handleLoginUser, findUser, handleCreateNewUser };
