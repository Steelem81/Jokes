const express = require("express");
const app = express();
const PORT = 8000

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require("./routes/jokes.routes");
AllJokesRoutes(app);

app.listen(PORT, () => console.log(`The server is listening on port ${ PORT }`))