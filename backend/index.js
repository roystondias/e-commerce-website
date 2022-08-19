//importing cors and express 
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//importing json file
const apiData = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello I am live");
})

app.get("/api", (req, res) => {
    res.send(apiData)
})

app.listen(port, () => {
    console.log("i am live again");
})