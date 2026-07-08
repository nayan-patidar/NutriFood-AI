const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoute");
const predictRoutes = require("./routes/predictRoute");
const historyRoutes = require("./routes/historyRoute");
const nutritionRoutes = require("./routes/nutritionRoute");


dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/predict", predictRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/nutrition",nutritionRoutes);

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NutriFood Backend API is Running..."
    });
});

module.exports = app;