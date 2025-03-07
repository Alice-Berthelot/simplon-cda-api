const Joke = require("../models/joke");

const getAllJokes = async (req, res, next) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occured while retrieving all the jokes" });
  }
};

const getOneJoke = async (req, res, next) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    res.status(200).json(joke);
  } catch (err) {
    res.status(500).json({
      error: `An error occured while retrieving a joke with id ${req.params.id}`,
    });
  }
};

// A MODIFIER :
const getRandomJoke = async (req, res, next) => {
  try {
    const jokes = await Joke.findAll();
    console.log("All jokes:", jokes);
    const randomIndex = Math.floor(Math.random() * jokes.length);
    console.log("randomIndex is", jokes[randomIndex])
    return res.status(200).json(jokes[randomIndex]);
    // const count = await Joke.count();
    // const randomIndex = Math.floor(Math.random() * count);
    // const joke = await Joke.findAll({
    //   offset: randomIndex,
    //   limit: 1,
    // });
    // 
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occured while retrieving a random joke" });
  }
};

const createJoke = async (req, res, next) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while creating a new joke" });
  }
};

module.exports = {
  getAllJokes,
  getOneJoke,
  getRandomJoke,
  createJoke,
};
