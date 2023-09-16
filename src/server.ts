import { config } from "dotenv";
config();
import express, { Application, Request, Response } from "express";
import getTickerRoute from "./routes/tickerRoute";
import { sequelize } from "./config/database";

const app: Application = express();

/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with the specific domains want to allow
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    res.sendStatus(204); // No Content for preflight requests
  } else {
    next(); // Continue processing other requests
  }
});*/

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".html")) {
        res.setHeader("Content-Type", "text/html");
      } else if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      } else if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the api");
});

app.use("/api/v1/", getTickerRoute);

const PORT = process.env.PORT || 3000;
const start = async (): Promise<void> => {
  await sequelize.sync();
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
