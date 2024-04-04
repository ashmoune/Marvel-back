const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics/:characterId", async (req, res) => {
  try {
    // Récupere l'identifiant du personnage depuis les paramètres de l'URL
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
