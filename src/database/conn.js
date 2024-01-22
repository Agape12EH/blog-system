import { sequelize } from "./db.js";

try {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
