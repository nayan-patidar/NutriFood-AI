# 🥗 NutriFood AI

**NutriFood AI** is an AI-powered food recognition and nutrition analysis application that allows users to upload or scan images of food and receive information about the detected food along with its nutritional details.

The project combines a **React frontend**, **Node.js/Express backend**, **MongoDB**, and a **Python FastAPI machine-learning service** using a **MobileNetV2-based Food-101 classification model**.

---

## ✨ Features

* 📸 **Food Image Recognition**

  * Upload a food image for AI-based classification.
  * Uses a MobileNetV2-based model trained/fine-tuned for Food-101 classification.

* 🥗 **Nutrition Information**

  * Retrieves nutritional information for recognized food items.
  * Nutrition data is managed through the backend and database.

* 👤 **User Authentication**

  * User registration and login.
  * Authentication middleware protects user-specific functionality.

* 📊 **Prediction History**

  * Stores previous food predictions.
  * Users can access their previous analysis history.

* 🔍 **Food Scanner**

  * Dedicated scanner interface for submitting food images.
  * Connects the frontend with the prediction API.

* 🌓 **Theme Support**

  * Frontend includes theme management through React context.

* 📱 **Responsive React UI**

  * Component-based interface with pages for:

    * Home
    * Dashboard
    * Scanner
    * Results
    * Login
    * Signup
    * Pricing
    * 404 / Not Found

---

## 🏗️ System Architecture

```text
                        ┌─────────────────────┐
                        │    React Frontend   │
                        │      Vite + JSX     │
                        └──────────┬──────────┘
                                   │
                              REST APIs
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │ Node.js + Express   │
                        │      Backend        │
                        └──────┬───────┬──────┘
                               │       │
                    ┌──────────┘       └──────────────┐
                    ▼                                 ▼
             ┌─────────────┐                  ┌──────────────┐
             │  MongoDB    │                  │ FastAPI ML   │
             │             │                  │   Service    │
             └─────────────┘                  └──────┬───────┘
                                                     │
                                                     ▼
                                            ┌─────────────────┐
                                            │ MobileNetV2     │
                                            │ Food Classifier │
                                            └─────────────────┘
```

### Request Flow

```text
User
  │
  │ Upload food image
  ▼
React Frontend
  │
  │ HTTP request
  ▼
Express Backend
  │
  │ Send image to ML service
  ▼
FastAPI
  │
  │ Image preprocessing
  ▼
MobileNetV2 Model
  │
  │ Food prediction
  ▼
FastAPI
  │
  │ Prediction result
  ▼
Express Backend
  │
  ├── Fetch nutrition information
  ├── Store prediction history
  │
  ▼
React Frontend
  │
  ▼
Nutrition / Prediction Result
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript / JSX
* CSS
* React Router
* Context API
* REST API integration

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Authentication middleware
* File upload handling
* REST APIs

### Machine Learning

* Python
* FastAPI
* TensorFlow / Keras
* MobileNetV2
* Food-101 dataset
* Image preprocessing and classification

### Development

* npm
* Python virtual environment
* Git

---

## 📁 Project Structure

```text
NutriFood AI/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── historyController.js
│   │   │   ├── nutritionController.js
│   │   │   ├── predictController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── uploadMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── FoodNutrition.js
│   │   │   ├── Prediction.js
│   │   │   └── user.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoute.js
│   │   │   ├── historyRoute.js
│   │   │   ├── nutritionRoute.js
│   │   │   └── predictRoute.js
│   │   │
│   │   ├── services/
│   │   │   └── fastapiService.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── hero.png
│   │   │
│   │   ├── components/
│   │   │   ├── Blog/
│   │   │   ├── Button/
│   │   │   ├── Cards/
│   │   │   ├── FAQ/
│   │   │   ├── Features/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Loader/
│   │   │   ├── Navbar/
│   │   │   ├── Pricing/
│   │   │   ├── Steps/
│   │   │   ├── Testimonials/
│   │   │   └── UploadCard/
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   └── useUpload.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Pricing/
│   │   │   ├── Result/
│   │   │   ├── Scanner/
│   │   │   ├── Signup/
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   └── scanner.js
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── ML/
│   ├── models/
│   │   ├── food101_mobilenetv2.keras
│   │   └── labels.json
│   │
│   ├── main.py
│   ├── predict.py
│   ├── utils.py
│   ├── testModel.py
│   └── requirements.txt
│
└── README.md
```

> Development-only files such as `node_modules`, `.git`, `__pycache__`, uploaded images, and experimental model/training files are intentionally omitted from the main tree.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd "NutriFood AI"
```

---

# ⚙️ Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FASTAPI_URL=http://localhost:8000
```

Start the backend:

```bash
npm start
```

For development, if a development script is configured:

```bash
npm run dev
```

The Express server will run on the configured port.

---

# 🤖 ML Service Setup

Navigate to the ML directory:

```bash
cd ML
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI service:

```bash
uvicorn main:app --reload --port 8000
```

The ML service is responsible for processing food images and generating predictions using the trained MobileNetV2 model.

---

# 💻 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at the URL shown by Vite, typically:

```text
http://localhost:5173
```

---

# 🧠 Machine Learning Pipeline

NutriFood AI uses a **MobileNetV2-based image classification model** for food recognition.

The general pipeline is:

```text
Food Image
    │
    ▼
Image Preprocessing
    │
    ▼
MobileNetV2
    │
    ▼
Class Prediction
    │
    ▼
Food Label
    │
    ▼
Nutrition Lookup
    │
    ▼
Nutrition Result
```

The trained model is stored in:

```text
ML/models/food101_mobilenetv2.keras
```

Class labels are stored separately in:

```text
ML/models/labels.json
```

---

# 🔌 Backend Modules

The backend follows a controller → route → model/service structure.

### Authentication

```text
authRoute.js
userController.js
auth.js
```

Responsible for user authentication and protected requests.

### Predictions

```text
predictRoute.js
predictController.js
fastapiService.js
```

Handles communication between the Node.js backend and the Python ML service.

### Nutrition

```text
nutritionRoute.js
nutritionController.js
FoodNutrition.js
```

Handles nutritional information associated with food items.

### Prediction History

```text
historyRoute.js
historyController.js
Prediction.js
```

Handles storing and retrieving users' prediction history.

### File Uploads

```text
uploadMiddleware.js
```

Handles image uploads submitted for food analysis.

---

# 🎨 Frontend Structure

The frontend is organized into reusable React components and pages.

### Main Pages

* Home
* Dashboard
* Scanner
* Result
* Login
* Signup
* Pricing
* Not Found

### Reusable Components

* Navbar
* Hero
* Feature cards
* Nutrition cards
* Ingredient cards
* Upload card
* Loader
* FAQ
* Testimonials
* Pricing
* Footer

### State Management

Application-level state is handled using React Context:

```text
AuthContext
ThemeContext
```

---

# 🔐 Environment Variables

Do **not** commit secrets or credentials to GitHub.

Example:

```env
MONGODB_URI=...
JWT_SECRET=...
FASTAPI_URL=...
PORT=5000
```

Add `.env` to `.gitignore`:

```gitignore
.env
```

---

# 📌 API Communication

The application uses the following high-level API modules:

```text
Authentication
      │
      ├── Register
      └── Login

Prediction
      │
      └── Food Image → ML Prediction

Nutrition
      │
      └── Food → Nutrition Information

History
      │
      ├── Save Prediction
      └── Retrieve Prediction History
```

The exact endpoints should be documented here after finalizing the backend routes.

---

# 🧪 Model Testing

Model-related testing files are located under:

```text
ML/
├── testModel.py
└── predict.py
```

Sample food images used during development are maintained separately and are not required for the production application.

---

# 🔮 Future Improvements

Potential improvements include:

* Improve food classification accuracy.
* Add confidence scores to predictions.
* Support multiple food items in a single image.
* Improve nutrition-data coverage.
* Add calorie and macro tracking.
* Add daily nutrition goals.
* Add personalized nutrition recommendations.
* Improve model performance and inference speed.
* Add image preprocessing and augmentation improvements.
* Deploy frontend, backend, and ML service independently.
* Add automated testing and CI/CD.
* Add API documentation with Swagger/OpenAPI.

---

# 📄 License

This project is intended for educational and development purposes.

Add an appropriate open-source license here if the repository is intended to be publicly distributed.

---

## 👨‍💻 Author

**Nayan Patidar**

B.Tech — Computer Science & Engineering

GitHub: `https://github.com/nayan-patidar`

---

## ⭐ Project Overview

NutriFood AI demonstrates an end-to-end AI application architecture:

```text
React
  ↓
Express.js
  ↓
MongoDB
  ↓
FastAPI
  ↓
MobileNetV2
  ↓
Food Recognition
  ↓
Nutrition Analysis
```

The project brings together **frontend development, REST API design, authentication, database management, image processing, and machine-learning inference** into a single application.
