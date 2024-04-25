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
  res.send("Hello World!");
});

app.listen(port, () => {
  console.info("Server rodando na porta 3000");
});

//https://roluquec.medium.com/job-queuing-101-start-using-bull-in-your-node-js-project-part-i-2be3ef36a42d
