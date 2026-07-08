const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/uploadMiddleware");
const predictController = require("../controllers/predictController");

router.post(
    "/",
    auth,
    upload.single("image"),
    predictController.predictFood
);

module.exports = router;