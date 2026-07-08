import tensorflow as tf

model = tf.keras.models.load_model(
    "models/food101_mobilenetv2.keras"
)

print("Model loaded.")