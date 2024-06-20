import http from 'http'
import express, { Express, Request, Response } from 'express';
import { logger } from './common/logger/index';
import dotenv from 'dotenv';


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

logger.info(process.env.PORT, port)

app.get('/', (req, res) => {
    res.send(`Server Running on port : ${port}`)
  })
  // Create the HTTP Express Server
  const server = http.createServer(app);

//   ProcessRoutes({ app, logger });
  // //initilaize websocket server for sync service
try{
    server.listen(port, () => {
      logger.info('listening on', port);
  
      // Handling any Uncaught Exception or UnHandled Promise Rejection if occurs to prevent server crash
      process.on('uncaughtException', (error, origin) => {
        logger.error(`UnCaught Exception Occurred: Exception (${error}) occurred but not handled.`);
      })
      process.on('unhandledRejection', (reason: unknown, promise: Promise<unknown>) => {
        logger.error(`UnHandled Rejection Occurred: Promise (${promise}) rejected with reason: (${reason}) but not handled.`);
      });
  
    });
  }catch(error:any){
   logger.error("error in listening port.",error)
  }