import { Sequelize } from "sequelize";
import { production, development } from "./database.config"; // Import the database configuration
const config = process.env.NODE_ENV === "PRODUCTION" ? production : development;

const sequelize = new Sequelize(config!);
// const sequelize = "";

export { sequelize };
