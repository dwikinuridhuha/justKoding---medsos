import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/auth/register", (req, res) => {
    res.send("register");
})

app.post("/api/auth/login", (req, res) => {
    res.send("Ini end point login");
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})