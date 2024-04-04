const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const skip = req.query.skip || 0;
    const limit = req.query.skip || 100;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY_MARVEL}&limit=${limit}&title=${title}&skip=${skip}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
