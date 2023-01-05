const JokeController = require('../controllers/jokes.contoller');

module.exports = app => {
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteExistingJoke);
}