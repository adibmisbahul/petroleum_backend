const pgp = require("pg-promise")();

const db = pgp("postgres://postgres:adib123@localhost:5432/belajar");

db.connect()
  .then((obj) => {
    console.log("✅ conected to postgresSQL");
    obj.done();
  })
  .catch((error) => {
    console.error("❌ failed to conect", error.message);
  });

module.exports = db;
