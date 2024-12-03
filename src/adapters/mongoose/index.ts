import mongoose from "mongoose";

let mongoDb: mongoose.Mongoose | null = null;

async function init(uri: string): Promise<void> {
    if (mongoDb) { return; }
    console.log(uri)
    const connection = await mongoose.connect(uri)
    if (!connection) {
        throw new Error("Failed to connect to MongoDB");
    }

    console.log("Connected to MongoDB");

    mongoDb = connection;
}

async function getInstance(): Promise<mongoose.Mongoose> {
    if (!mongoDb) {
        throw new Error("MongoDB is not initialized");
    }

    return mongoDb;
}

export default {
    init,
    getInstance
};