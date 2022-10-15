import cron, { ScheduledTask } from "node-cron";

const task = (): ScheduledTask =>
    cron.schedule("* * * * *", async () => {
        console.log("bot initializing...");
        console.log("bot finished 🚀");
    });

export default task;
