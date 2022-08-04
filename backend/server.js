import express from "express";
const app = express();
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
