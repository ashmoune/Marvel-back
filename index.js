require("dotenv").config();
// import des packages
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Import des routes  :
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const characterIdRoutes = require("./routes/characterId");
const comicIdRoutes = require("./routes/comicId");
const comicsSpecificCharactersRoutes = require("./routes/comicsSpecificCharacters");
app.use(charactersRoutes);
app.use(comicsRoutes);
app.use(characterIdRoutes);
app.use(comicIdRoutes);
app.use(comicsSpecificCharactersRoutes);

app.get("/", (req, res) => {
  res.json(201).json({ message: "Welcolme on Marvel API 👾👾👾 " });
});

app.all("*", (req, res) => {
  return res.status(404).json("Not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Lezzzzzgoooo on port ${PORT} 🚀🚀🚀`);
});
