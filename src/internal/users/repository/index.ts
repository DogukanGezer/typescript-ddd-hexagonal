import { Repository as UserMongoRepository } from "./mongo";
import { Repository as UserKnexRepository } from "./knex";
import { IUserRepository } from "../../core/ports/repository";
import { env } from "../../../internal/config/index";

export default function provideUserRepository(): IUserRepository {
    let repository: IUserRepository;

    switch (env.STORAGE) {
        case "mongodb":
            repository = new UserMongoRepository();
            break;
        case "knex":
            repository = new UserKnexRepository();
            break;
        default:
            repository = new UserMongoRepository();
            break;
    }
    return repository;
}