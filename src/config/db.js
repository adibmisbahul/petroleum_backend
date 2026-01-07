const pgp = require("pg-promise")();

const db = pgp("postgres://postgres:adib123@localhost:5432/belajar");

db.connect()
  .then((obj) => {
    console.log("✅ Terhubung ke PostgreSQL");
    obj.done();
  })
  .catch((error) => {
    console.error("❌ Gagal konek:", error.message);
  });

module.exports = db;
