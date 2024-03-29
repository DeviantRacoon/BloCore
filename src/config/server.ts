import express from 'express';
import dotenv from './dotenv';
dotenv.config();

export class ServerExpress {

    app: express.Application;
    port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
    }

    startServer(callback: VoidFunction) {
        this.app.use(express.static("public"));
        this.app.listen(this.port, callback);
    }
} 