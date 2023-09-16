import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database"; // Import your Sequelize instance

interface CryptoTickerAttributes {
  name: string;
  last: number;
  buy: number;
  sell: number;
  volume: number;
  base_unit: string;
}

export interface CryptoTickerCreationAttributes extends CryptoTickerAttributes {}

class CryptoTicker extends Model<CryptoTickerAttributes, CryptoTickerCreationAttributes> {
  public id!: number;
  public name!: string;
  public last!: number;
  public buy!: number;
  public sell!: number;
  public volume!: number;
  public base_unit!: string;

  //   // Timestamps
  //   public readonly createdAt!: Date;
  //   public readonly updatedAt!: Date;
}

CryptoTicker.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    buy: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sell: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    volume: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    base_unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Sequelize instance
    tableName: "crypto_tickers",
  }
);

export { CryptoTicker };
