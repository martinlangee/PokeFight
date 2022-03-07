const express = require("express");
const app = express();
const pokemonRouter = require("./pokemon");

// Routes ------
app.use('/pokemon', pokemonRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})