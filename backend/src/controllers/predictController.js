const Prediction = require("../models/Prediction");
const fastapiService = require("../services/fastapiService");
const FoodNutrition = require("../models/FoodNutrition");


const predictFood = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image."
            });
        }

        // Get prediction from FastAPI
        const prediction = await fastapiService.predictFood(req.file.path);

        const foodName = prediction.prediction;
        const confidence = prediction.confidence;

        // Temporary nutrition values
     const nutrition = await FoodNutrition.findOne({
    foodName: foodName
});

        // Save prediction
      const savedPrediction = await Prediction.create({
    user: req.user.id,
    foodName,
    confidence,
    imageUrl: req.file.path,

    calories: nutrition?.calories || 0,
    protein: nutrition?.protein || 0,
    carbs: nutrition?.carbs || 0,
    fat: nutrition?.fat || 0,
    fiber: nutrition?.fiber || 0
});

        res.status(200).json({
            success: true,
            message: "Prediction successful.",
            data: savedPrediction
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message || "Prediction failed."
        });
    }
};

module.exports = {
    predictFood
};