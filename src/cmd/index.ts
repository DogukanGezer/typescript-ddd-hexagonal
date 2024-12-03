import { loadConfig, env } from "../internal/config/index";
import MongoDb from "../adapters/mongoose";
import NestJs from "../adapters/nest";

async function main() {
    await loadConfig()

    await MongoDb.init(env.MONGO_URI)

    const nestJs = new NestJs(env.HOST, env.PORT);
    await nestJs.init()
    await nestJs.listen()
}

async function gracefulShutdown() {

    process.on('SIGINT', async () => {
        console.log('SIGINT signal received: closing HTTP server');
        await (await MongoDb.getInstance()).disconnect();
        process.exit(0);
    });

    process.on('SIGTERM', async () => {
        console.log('SIGTERM signal received: closing HTTP server');
        await (await MongoDb.getInstance()).disconnect();
        process.exit(0);
    });
}

main()
gracefulShutdown()