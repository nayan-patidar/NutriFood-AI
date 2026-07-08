const mongoose = require("mongoose");
const Prediction = require("../models/Prediction");

// =======================
// Today's Nutrition
// =======================
const getTodayNutrition = async (req, res) => {
    try {
        const start = new Date();
        start.setHours(0, 0, 0, 0);

        const end = new Date();
        end.setHours(23, 59, 59, 999);

        console.log("========== TODAY ==========");
        console.log("req.user.id:", req.user.id);
        console.log("Type:", typeof req.user.id);
        console.log("Start:", start);
        console.log("End:", end);

        const docs = await Prediction.find();
        console.log("All Documents:");
        console.log(docs);

        const result = await Prediction.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(req.user.id),
                    createdAt: {
                        $gte: start,
                        $lte: end,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    totalFoods: { $sum: 1 },
                    calories: { $sum: "$calories" },
                    protein: { $sum: "$protein" },
                    carbs: { $sum: "$carbs" },
                    fat: { $sum: "$fat" },
                },
            },
        ]);

        console.log("Aggregation Result:");
        console.log(result);
        console.log("===========================");

        res.status(200).json({
            success: true,
            data:
                result[0] || {
                    totalFoods: 0,
                    calories: 0,
                    protein: 0,
                    carbs: 0,
                    fat: 0,
                },
        });
    } catch (error) {
        console.error("TODAY ERROR:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// =======================
// Monthly Nutrition
// =======================
const getMonthlyNutrition = async (req, res) => {
    try {
        const today = new Date();

        const start = new Date(
            today.getFullYear(),
            today.getMonth(),
            1
        );

        const end = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
            23,
            59,
            59,
            999
        );

        const result = await Prediction.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(req.user.id),
                    createdAt: {
                        $gte: start,
                        $lte: end,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    totalFoods: { $sum: 1 },
                    calories: { $sum: "$calories" },
                    protein: { $sum: "$protein" },
                    carbs: { $sum: "$carbs" },
                    fat: { $sum: "$fat" },
                },
            },
        ]);

        res.status(200).json({
            success: true,
            data:
                result[0] || {
                    totalFoods: 0,
                    calories: 0,
                    protein: 0,
                    carbs: 0,
                    fat: 0,
                },
        });
    } catch (error) {
        console.error("MONTH ERROR:");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getTodayNutrition,
    getMonthlyNutrition,
};