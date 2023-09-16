import path from "path";
import { CryptoTicker, CryptoTickerCreationAttributes } from "../models/dataModel";
import fsPromises from "fs";

export async function seedCryptoTickers() {
  try {
    const dataToSeed = await fsPromises.readFileSync(path.join(__dirname + "/data.txt"), "utf-8");
    const data: any = Object.values(JSON.parse(dataToSeed)).slice(0, 10);
    // const formattedData: any = data.map((obj: any) => ({
    //   base_unit: obj.base_unit,
    // }));
    console.log(data);
    await CryptoTicker.bulkCreate(data);
    console.log("Crypto tickers seeded successfully");
  } catch (error) {
    console.error("Error seeding crypto tickers:", error);
  }
}
