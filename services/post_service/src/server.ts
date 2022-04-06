import express from 'express';
import { config } from './config';
import { appRouter } from './router';
import { userErrorHandler } from './utils/errors/errorHandler';

export class Server {
    public app: express.Application;;

    public static bootStrap(): Server {
        return new Server
    }

    constructor() {
        console.log(`In Server constructor --> V`);
        this.app = express();
        this.app.use(express.json());
        this.app.use(appRouter)
        this.app.use(userErrorHandler)
        this.app.listen(config.serverPort, () => {
            console.log(`Server started on ${config.serverPort}`);
        });

    }
}