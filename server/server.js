const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/user", (req, res) => {
    res.json({name: "John", age: 30, mainPhoto: "", gender: "male", height: 180});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})