import dotenv from "dotenv";
import express, { Express } from "express";
const app: Express = express();

/* config env */
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

export default app;
