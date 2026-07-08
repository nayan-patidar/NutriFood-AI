from fastapi import FastAPI, UploadFile, File, HTTPException
from predict import predict_food

app = FastAPI(
    title="NutriFood AI API",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "success": True,
        "message": "NutriFood AI FastAPI is Running..."
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:

        result = predict_food(file.file)

        return {
            "success": True,
            "prediction": result["prediction"],
            "confidence": result["confidence"]
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )