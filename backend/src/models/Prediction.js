const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    // User who scanned the food
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Predicted food name
    foodName: {
      type: String,
      required: true,
      trim: true,
    },

    // AI confidence
    confidence: {
      type: Number,
      required: true,
    },

    // Uploaded image path (optional)
    imageUrl: {
      type: String,
      default: "",
    },

    // Nutrition Information
    calories: {
      type: Number,
      default: 0,
    },

    protein: {
      type: Number,
      default: 0,
    },

    carbs: {
      type: Number,
      default: 0,
    },

    fat: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
    mongoose.models.Prediction ||
    mongoose.model("Prediction", predictionSchema);