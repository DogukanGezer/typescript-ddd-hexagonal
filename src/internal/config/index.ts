import { EnvType, load } from 'ts-dotenv';

export const schema = {
    HOST: String,
    PORT: Number,
    MONGO_URI: String
};

export type Env = EnvType<typeof schema>;
export let env: Env;

export async function loadConfig(): Promise<void> {
    env = await load(schema);
    console.log("New config loaded");
}