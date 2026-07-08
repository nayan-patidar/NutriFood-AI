import tensorflow as tf
import numpy as np

from utils import preprocess_image, load_labels


# Load model only once when server starts
model = tf.keras.models.load_model(
    "models/food101_mobilenetv2.keras",
    compile=False
)

# Load labels
labels = load_labels("models/labels.json")


def predict_food(image_file):

    # Preprocess uploaded image
    image = preprocess_image(image_file)

    # Model prediction
    prediction = model.predict(image, verbose=0)

    # Get predicted class index
    class_index = int(np.argmax(prediction))

    # Confidence score
    confidence = float(np.max(prediction) * 100)

    # Get food name
    food_name = labels[class_index]

    return {
        "prediction": food_name,
        "confidence": round(confidence, 2)
    }