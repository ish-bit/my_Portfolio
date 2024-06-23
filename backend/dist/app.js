"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./common/logger/index");
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = require("./modules/portfolio/route");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
index_1.logger.info(process.env.PORT, port);
app.get('/', (req, res) => {
    res.send(`Server Running on port : ${port}`);
});
// Create the HTTP Express Server
const server = http_1.default.createServer(app);
(0, route_1.PortfolioRoutes)({ app, logger: index_1.logger });
// //initilaize websocket server for sync service
try {
    server.listen(port, () => {
        index_1.logger.info('listening on', port);
        // Handling any Uncaught Exception or UnHandled Promise Rejection if occurs to prevent server crash
        process.on('uncaughtException', (error, origin) => {
            index_1.logger.error(`UnCaught Exception Occurred: Exception (${error}) occurred but not handled.`);
        });
        process.on('unhandledRejection', (reason, promise) => {
            index_1.logger.error(`UnHandled Rejection Occurred: Promise (${promise}) rejected with reason: (${reason}) but not handled.`);
        });
    });
}
catch (error) {
    index_1.logger.error("error in listening port.", error);
}
