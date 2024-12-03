import { Controller, Get, HttpStatus, Inject, Param, Res } from "@nestjs/common";
import { IUserUsecase } from "../../../core/ports/usecases";
import { GetUserRequest } from "../types/request";
import { Response } from 'express';

@Controller("users")
export default class UserController {

    constructor(
        @Inject('IUserUsecase') private readonly userService: IUserUsecase
    ) { }

    @Get(":id")
    async getUser(@Res() res: Response, @Param() params: GetUserRequest) {
        const user = await this.userService.getUser(params.id);
        if (!user) { return res.status(HttpStatus.NOT_FOUND).json({ message: "User not found" }); }

        return res.status(HttpStatus.OK).json(user);
    }
}