import Queue from "bull";

const connection = {
  host: "localhost",
  port: 6379,
};

const myQueue = new Queue("my-first-queue", { redis: { ...connection } });

async function addJobs() {
  console.log("Adding jobs...");
  for (let i = 0; i < 2; i++) {
    await myQueue.add("my-job", { foo: "bar" });
  }
  console.log("Done");
}

export { addJobs };
