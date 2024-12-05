import knex from "../../../../adapters/knex";
import { UserDocument } from "../../../../adapters/mongoose/models/users";
import { IUserRepository } from "../../../core/ports/repository";
import {
    GetUserInput,
    GetUserOutput,
    SearchUserInput,
    SearchUserOutput,
    CreateUserInput,
    CreateUserOutput,
    UpdateUserInput,
    UpdateUserOutput,
} from "../types/user";
import { Injectable } from "@nestjs/common";

@Injectable()
export class Repository implements IUserRepository {
    async getUser(input: GetUserInput): Promise<GetUserOutput | null> {
        const user = await (await knex()).getInstance()<UserDocument>("users").where({ _id: input._id }).first()
        if (!user) { return null; }

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