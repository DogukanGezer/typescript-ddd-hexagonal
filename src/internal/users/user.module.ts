import { Module } from "@nestjs/common";
import UserController from "./handlers/nest";
import { Repository as UserRepository } from "./repository"
import UserUsecase from "./usecases"

@Module({
    controllers: [UserController],
    providers: [
        UserRepository,
        {
            provide: "IUserUsecase",
            useClass: UserUsecase
        }
    ]
})
export class UserModule { }