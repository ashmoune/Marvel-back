const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
    );

    res.status(201).json(response.data);
  } catch (error) {
    // console.log(characterId);

    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
