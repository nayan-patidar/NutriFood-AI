const Prediction = require("../models/prediction");

// Get all predictions of logged-in user
const getHistory = async (req, res) => {
    try {

        const history = await Prediction.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: history.length,
            data: history
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch history."
        });

    }
};

module.exports = {
    getHistory
};