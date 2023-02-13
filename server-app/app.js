const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', routes);

app.use((err, req, res, next) => {
    res.status(500).send({ message: "Internal server error!" })
})

module.exports = app;