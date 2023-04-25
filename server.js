import express from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Server on...");
});

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});

//npm init -y
//npm i express dotenv cors nodemon
//npm i -D @babel/core @babel/node @babel/preset-env
