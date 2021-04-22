require("dotenv").config();

const development = {
  username: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB,
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  dialect: "mysql",
};

const test = {
  username: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB,
  host: process.env.TEST_DB_HOST,
  port: process.env.TEST_DB_PORT,
  dialect: "mysql",
};

const production = {
  username: process.env.PROD_DB_USER,
  password: process.env.PROD_DB_PASSWORD,
  database: process.env.PROD_DB,
  host: process.env.PROD_DB_HOST,
  port: process.env.PROD_DB_PORT,
  dialect: "mysql",
};

module.exports = { development, test, production };
