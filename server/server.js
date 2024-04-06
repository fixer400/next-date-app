const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/hello", (req, res) => {
    res.json({message:"Hello World!", peoples: ["John", "Jane", "Joe"]});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})