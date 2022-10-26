const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const port = 3100;

app.get("/", (req, res)=>{
    res.send("Hi PaDev Community");
})

app.listen(port, ()=>{
    debug("Listening on port " + chalk.green(port));
})