import { Sequelize } from "sequelize";

const sequelize = new Sequelize("systemblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
