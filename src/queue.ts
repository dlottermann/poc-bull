import Queue from "bull";
import { jobsProcess } from "./consumer";

const connection = {
  host: "localhost",
  port: 6379,
};

const myQueue = new Queue("my-first-queue", { redis: { ...connection } });

myQueue.process(jobsProcess);

async function addJob() {
  console.log("add job...");
  await myQueue.add({ foo: "bar" });
  console.log("Done!");
}

myQueue.on("completed", (job, result) => {
  console.log(`Job completed with result ${result}`);
});

export { addJob };
