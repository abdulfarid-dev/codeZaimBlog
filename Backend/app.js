import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./routes/userRoutes.js";

const app = express();

import dotenv from "dotenv";
dotenv.config();


// ---------------------------------------
// 1. CORS Configuration
// ---------------------------------------
const allowedOrigins = [
  "http://localhost:5173",                  // Local development
  "https://codezaimblog.netlify.app"       // Deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ---------------------------------------
// 2. Middleware
// ---------------------------------------
app.use(express.json());

// ---------------------------------------
// 3. Routes
// ---------------------------------------
app.use("/user", UserRoutes);

// ---------------------------------------
// 4. MongoDB Connection
// ---------------------------------------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB Error:", err));

// ---------------------------------------
// 5. PORT for Render
// ---------------------------------------
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
