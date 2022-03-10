const express = require("express");
const { StatusCodes } = require("http-status-codes");
const app = express();
const pokemonRouter = require("./pokemon");

// Routes ------
app.use('/pokemon', pokemonRouter);

app.use((req, res, next) => {
    res.status(StatusCodes.OK).send(
        `<h1>Martin\'s PokeFight API is listening ...</h1>
         <h3>Here's how to use it:</h3>
         <p>"/pokemon" to get all pokemon\'s data.</p>
         <p>"/pokemon/:id" to get a specific pokemon\'s data.</p>
         <p>"/pokemon/:id/:(&lt;name&gt;|&lt;type&gt;|&lt;base&gt;)" to get a specific pokemon\'s info.</p>
         <p>"/pokemon/image/:id/:to get a pokemon\'s SVG image</p>`);
    next(req, res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})