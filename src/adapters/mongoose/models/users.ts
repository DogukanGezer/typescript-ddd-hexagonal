import { Document, Model, model, Schema } from "mongoose";

export interface UserDocument extends Document {
    _id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
}

const userSchema: Schema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: () => { return new Date() } },
})

export const UserModel: Model<UserDocument> = model<UserDocument>("users", userSchema);