const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const nutritionController = require("../controllers/nutritionController");

router.get("/today", auth, nutritionController.getTodayNutrition);

router.get("/month", auth, nutritionController.getMonthlyNutrition);

module.exports = router;