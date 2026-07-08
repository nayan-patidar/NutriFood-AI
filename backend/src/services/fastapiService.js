const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const predictFood = async (imagePath) => {
    try {
        const formData = new FormData();

        formData.append(
            "file",
            fs.createReadStream(imagePath)
        );

        const response = await axios.post(
            `${process.env.FASTAPI_URL}/predict`,
            formData,
            {
                headers: formData.getHeaders(),
            }
        );

        return response.data;

    } catch (error) {
        console.error("FastAPI Error:", error.message);
        throw new Error("Prediction service unavailable.");
    }
};

module.exports = {
    predictFood,
};