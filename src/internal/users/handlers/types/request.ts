import { IsString, Length } from "class-validator"

export class GetUserRequest {
    @IsString()
    @Length(24, 24)
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}