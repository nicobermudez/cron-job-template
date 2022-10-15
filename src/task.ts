import cron, { ScheduledTask } from "node-cron";

const task = (): ScheduledTask =>
    cron.schedule("* * * * *", async () => {
        console.log("task initializing...");
        console.log("task finished 🚀");
    });

export default task;
