const Sequelize = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require("./server.config");
console.log(DB_NAME, DB_PASS, DB_URL, DB_USER);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = Object.freeze(sequelize);
