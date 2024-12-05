import User from "../domain/models/user";
import { IUserUsecase } from "../../core/ports/usecases";
import { Injectable, Inject } from "@nestjs/common";
import { Repository as UserRepository } from "../repository/mongo/index"
import { IUserRepository } from "../../core/ports/repository";

@Injectable()
export default class Usecase implements IUserUsecase {

    constructor(
        @Inject("IUserRepository") private readonly userRepository: IUserRepository
    ) { }


    async getUser(_id: string): Promise<User | null> {
        const user = await this.userRepository.getUser({ _id })
        if (!user) { return null }

        return new User(
            user._id,
            user.name,
            user.email,
        )
    }
    async searchUser(name: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async createUser(user: User): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    async updateUser(user: User): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
}