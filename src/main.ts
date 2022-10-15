import axios from "axios";
import task from "./bot";

async function main() {
    const kucoin = axios.create({
        baseURL: "https://api.kucoin.com/api/v1",
        timeout: 10000,
        headers: {
            "KC-API-KEY": "",
            "KC-API-SIGN": "",
            "KC-API-TIMESTAMP": "",
            "KC-API-PASSPHRASE": "",
            "KC-API-KEY-VERSION": "",
        },
    });

    task(kucoin).start();
}

main();
