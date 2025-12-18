import express from "express";
import router from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/auth", router);

app.listen(port, () => {
    console.log("Listening on port " + port);
})