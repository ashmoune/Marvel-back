const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY_MARVEL}`
    );
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
