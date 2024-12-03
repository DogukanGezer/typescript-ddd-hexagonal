import Usecase from "./index";
import { Repository as UserRepository } from "../repository";
import User from "../domain/models/user";
import { GetUserInput } from "../repository/types/user";

describe("User Usecase", () => {
    let usecase: Usecase;
    let userRepository: jest.Mocked<UserRepository>;

    beforeEach(() => {
        userRepository = {
            getUser: jest.fn(),
            searchUser: jest.fn(),
            createUser: jest.fn(),
            updateUser: jest.fn(),
        } as unknown as jest.Mocked<UserRepository>;

        usecase = new Usecase(userRepository);
    })


    it("should get user", async () => {
        const getUserInput: GetUserInput = new GetUserInput("2");

        const mockUser = {
            _id: "2",
            name: "test",
            email: "test@test.test"
        }
        userRepository.getUser.mockResolvedValue(mockUser);

        const result = await usecase.getUser(getUserInput._id);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(User);
        expect(result?._id).toBe("2");
        expect(result?.name).toBe("test");
        expect(result?.email).toBe("test@test.test");
    })
})