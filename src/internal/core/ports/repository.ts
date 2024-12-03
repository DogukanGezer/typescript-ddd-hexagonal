import {
    GetUserInput,
    GetUserOutput,
    SearchUserInput,
    SearchUserOutput,
    CreateUserInput,
    CreateUserOutput,
    UpdateUserInput,
    UpdateUserOutput,
} from "../../users/repository/types/user";

export interface IUserRepository {
    getUser(input: GetUserInput): Promise<GetUserOutput | null>

    searchUser(input: SearchUserInput): Promise<SearchUserOutput | null>

    createUser(input: CreateUserInput): Promise<CreateUserOutput | null>

    updateUser(input: UpdateUserInput): Promise<UpdateUserOutput | null>
}