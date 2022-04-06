import mongoose from "mongoose";
import { config } from "./config"
import { Server } from "./server";



(async () => {    
    const connectionString = `${config.db.server}:${config.db.port}/${config.db.name}`;
    console.log(connectionString);

    await mongoose.connect(connectionString);
    
    console.log(`[MongoDB] connected to port: ${config.db.port} --> V`);
    
    const server: Server = Server.bootStrap();
    
    
})();
