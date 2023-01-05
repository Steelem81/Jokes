const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', err})
        });
}

module.exports.findOneJoke = (req, res) => {
    console.log(req.params.id)
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', err})
        });
}

module.exports.createNewJoke = (req, res) => {
    console.log(req.body)
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', err})
        })
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Soemthing went wrong', err})
        });
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', err })
        });
}