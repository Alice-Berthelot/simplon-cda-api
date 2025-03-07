const express = require('express');
const router = express.Router();

const { getAllJokes } = require("../controllers/jokeController");
const { getOneJoke } = require("../controllers/jokeController");
const { getRandomJoke } = require("../controllers/jokeController");
const { createJoke } = require("../controllers/jokeController");

router.get("/", getAllJokes);
router.get("/:id", getOneJoke);
router.get("/random", getRandomJoke);
router.post("/", createJoke);

module.exports = router;

