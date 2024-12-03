import { NestFactory, NestApplication } from "@nestjs/core"
import { NestFactoryStatic } from "@nestjs/core/nest-factory";
import { AppModule } from "../../app.module";
import { ValidationPipe } from "@nestjs/common";


export default class NestJS {
    private host: string;
    private port: number;
    public appFactory!: NestFactoryStatic;

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
    }

    async init(): Promise<NestFactoryStatic> {
        this.appFactory = NestFactory
        return this.appFactory
    }

    async listen(): Promise<void> {
        const app = await this.appFactory.create<NestApplication>(AppModule)

        app.useGlobalPipes(new ValidationPipe());

        await app.listen(this.port, this.host).then(() => {
            console.log(`Server running at http://${this.host}:${this.port}`)
        })
    }
}