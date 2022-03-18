const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/popup", (req,res) => {
    res.sendFile(path.join(__dirname,"popup.html"));
})

app.listen(process.env.PORT || 3001, () => {
    console.info("Server running (Default: 3001)");
})