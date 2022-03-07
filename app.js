const express = require("express");
const { StatusCodes } = require("http-status-codes");
const app = express();
const pokemonRouter = require("./pokemon");

// Routes ------
app.use('/pokemon', pokemonRouter);

app.use((req, res, next) => {
    res.status(StatusCodes.OK).send('Martin\'s PokeFight API is listening ...\nSpecify "\pokemon\:id" to get a pokemon\'s data.\nSpecify "\pokemon\:id\:(<name>|<type>|<base>)" to get a pokemon\'s info.');
    next(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})