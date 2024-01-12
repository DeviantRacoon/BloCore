import "reflect-metadata"

import express from "express";

import { ServerExpress } from "./app/server";
import { AppDataSource } from "./config/database/typeorm";

import { routingModule } from "./config/middleware/routing.middleware";

const app = new ServerExpress

app.app.use(express.json())
app.app.use(routingModule(app))

app.startServer(async()=>{
    // logger.info('servidor corriendo en el puerto: ' + server.port);
    try{
        console.log('servidor corriendo en el puerto: ' + app.port);
        await AppDataSource.initialize();        
        console.log('[+] Conectado a la base de datos');
        // logger.info('Conectado a la base de datos');
    }catch(err: any){
        // logger.error(err);
        console.error(err.message);
        
    }
});
