import "reflect-metadata"

import cors from 'cors';
import express from "express";
import corsOptions from "./config/middleware/cors.middlewares";
import logger from "./config/logger";

import { error404 } from "./config/middleware/404.middlewares";
import { ServerExpress } from "./config/server";
import { AppDataSource } from "./config/database/typeorm";
import { routingModule } from "./config/middleware/routing.middleware";

const app = new ServerExpress

app.app.use(express.json())
app.app.use(cors(corsOptions))
app.app.use(routingModule(app))
app.app.use(error404)

app.startServer(async () => {
    logger.info('Server is running on port: ' + app.port);
    try {
        await AppDataSource.initialize();
        console.log(process.env.PORT);
        logger.info('Connection successful on database');
    } catch (err: any) {
        logger.error(err);
    }
});
