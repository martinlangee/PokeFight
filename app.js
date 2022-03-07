const express = require("express");
const { StatusCodes } = require("http-status-codes");
const app = express();
const pokemonRouter = require("./pokemon");

// Routes ------
app.use('/pokemon', pokemonRouter);

app.use((req, res, next) => {
    res.status(StatusCodes.OK).send(
        `<h1>Martin\'s PokeFight API is listening ...</h1>
         <p>Specify "\\pokemon\\:id" to get a pokemon\'s data.</p>
         <p>Specify "\\pokemon\\:id\\:(&lt;name&gt;|&lt;type&gt;|&lt;base&gt;)" to get a pokemon\'s info.</p>`);
    next(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})