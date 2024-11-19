require("dotenv").config();
const sequelize = require("./sequelize");
const User = require("../models/User");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error.message);
  } finally {
    process.exit();
  }
};

syncDatabase();
