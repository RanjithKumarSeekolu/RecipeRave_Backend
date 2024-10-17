const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

module.exports = { connectDB };
