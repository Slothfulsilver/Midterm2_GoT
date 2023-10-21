const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

const apiUrl = "https://anapioficeandfire.com/api/characters/";
let characters = [];

axios.get(apiUrl)
  .then((response) => {
    characters = response.data;
  })
  .catch((error) => {
    console.error("Error fetching character data from the API:", error);
  });

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});