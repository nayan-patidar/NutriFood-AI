const mongoose = require("mongoose");

const foodNutritionSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

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

    fiber: {
      type: Number,
      default: 0,
    },

    servingSize: {
      type: String,
      default: "100g",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "FoodNutrition",
  foodNutritionSchema
);