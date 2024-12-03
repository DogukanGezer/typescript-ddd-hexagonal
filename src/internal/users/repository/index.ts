import { Document, Model } from "mongoose";
import { UserDocument, UserModel as Users } from "../../../adapters/mongoose/models/users";
import { IUserRepository } from "../../core/ports/repository";
import {
    GetUserInput,
    GetUserOutput,
    SearchUserInput,
    SearchUserOutput,
    CreateUserInput,
    CreateUserOutput,
    UpdateUserInput,
    UpdateUserOutput,
} from "./types/user";
import { Injectable } from "@nestjs/common";

@Injectable()
export class Repository implements IUserRepository {
    async getUser(input: GetUserInput): Promise<GetUserOutput | null> {
        const user = await Users.findOne({ _id: input._id }) as UserDocument
        if (!user) { return null }
        
        return new GetUserOutput(
            user._id,
            user.name,
            user.email,
        )
    }

    async searchUser(input: SearchUserInput): Promise<SearchUserOutput | null> {
        return null
    }

    async createUser(input: CreateUserInput): Promise<CreateUserOutput | null> {
        return null
    }

    async updateUser(input: UpdateUserInput): Promise<UpdateUserOutput | null> {
        return null
    }
}