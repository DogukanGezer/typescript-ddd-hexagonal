import { Module } from "@nestjs/common";
import { UserModule } from "./internal/users/user.module";

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [],
})
export class AppModule { }