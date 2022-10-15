import { AxiosInstance } from "axios";
import cron, { ScheduledTask } from "node-cron";
import { v4 } from "uuid";

const task = (kucoin: AxiosInstance): ScheduledTask =>
    cron.schedule("* * * * *", async () => {
        console.log("bot initializing...");

        // 1. find orders
        // 2. establish rules to determine whether or not we want to buy

        // 3. place orders

        // example:
        // await kucoin.post("/orders", {
        //     clientOid: v4(),
        //     side: "buy",
        //     symbol: "ETH",
        //     type: "market",
        //     size: 10,
        // });

        console.log("bot finished 🚀");
    });

export default task;
