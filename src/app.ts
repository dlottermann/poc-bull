import express from "express";

import { addJob } from "./queue";

const port = process.env.PORT; // "3000"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/job", (req, res) => {
  addJob();
  res.send("Job added!");
});

app.listen(port, () => {
  console.info("Server running on port 3000");
});

