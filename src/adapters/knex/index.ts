import { knex, Knex } from "knex"
import { env } from "../../internal/config/index"

let instance: KnexAdapter | null = null

export class KnexAdapter {
    private instance: Knex | null = null;;
    private options: Knex.Config = {
        client: "pg",
        connection: env.POSTGRE_URI
    }

    async init() {
        const newInstance = await knex(this.options);
        if (!newInstance) {
            throw new Error("KnexAdapter: Failed to initialize");
        }

        console.log("KnexAdapter: Initialized");

        this.instance = newInstance;
    }

    getInstance() {
        if (!this.instance) {
            throw new Error("KnexAdapter: Instance not initialized");
        }

        return this.instance;
    }
}

export default async function getInstance(): Promise<KnexAdapter> {
    if (!instance) {
        instance = new KnexAdapter();
        await instance.init()
    }

    return instance;
}