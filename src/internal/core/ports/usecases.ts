import User from '../../users/domain/models/user';

export interface IUserUsecase {
    getUser(_id: string): Promise<User | null>

    searchUser(name: string): Promise<User[]>

    createUser(user: User): Promise<string | null>

    updateUser(user: User): Promise<string | null>
}