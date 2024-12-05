import { Module } from "@nestjs/common";
import UserController from "./handlers/nest";
import { Repository as UserMongoRepository } from "./repository/mongo/index"
import { Repository as UserKnexRepository } from "./repository/knex/index";
import UserUsecase from "./usecases"
import provideUserRepository from "./repository";

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: "IUserRepository",
            useFactory: () => {
                return provideUserRepository()
            }
        },
        {
            provide: "IUserUsecase",
            useClass: UserUsecase
        }
    ]
})
export class UserModule { }