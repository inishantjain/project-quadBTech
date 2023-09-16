import { Request, Response } from "express";
import { CryptoTicker } from "../models/dataModel";
import { sequelize } from "../config/database";
import { seedCryptoTickers } from "../seeders/seed-wazirX";

export async function getTicker(req: Request, res: Response) {
  try {
    const cryptoTicker = await CryptoTicker.findAll();
    res.json(cryptoTicker);
  } catch (error) {
    console.error("Error retrieving crypto tickers:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}

export async function seedTable(req: Request, res: Response) {
  try {
    // await sequelize.sync({ force: true }); // Drop and recreate tables (for testing)
    await seedCryptoTickers(); // Seed crypto tickers
    console.log("Data seeding completed");
    res.json({ success: true });
  } catch (error) {
    console.error("Error seeding data:", error);
    res.sendStatus(500);
  }
}
