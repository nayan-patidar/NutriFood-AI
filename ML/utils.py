import json
import numpy as np
from PIL import Image


IMG_SIZE = (224, 224)


def load_labels(path):
    with open(path, "r") as f:
        return json.load(f)


def preprocess_image(image_file):

    image = Image.open(image_file).convert("RGB")

    image = image.resize(IMG_SIZE)

    image = np.array(image)

    image = image / 255.0

    image = np.expand_dims(image, axis=0)

    return image