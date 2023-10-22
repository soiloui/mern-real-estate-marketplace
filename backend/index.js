import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/config.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

serverInit();

async function serverInit() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
