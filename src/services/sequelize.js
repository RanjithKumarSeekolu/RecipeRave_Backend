const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect:
      "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    logging: console.log,
  }
);

async function connectSequelize() {
  try {
    await sequelize.authenticate();
    console.log("Sequelize DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function disconnectSequelize() {
  sequelize.close();
}

module.exports = {
  connectSequelize,
  disconnectSequelize,
  sequelize,
};
