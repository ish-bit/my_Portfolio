"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRoutes = void 0;
const config_1 = require("../../config");
const controller_1 = require("./controller");
const PortfolioRoutes = ({ app, logger }) => {
    const aboutController = new controller_1.AboutController();
    app.get(`${config_1.config.API_PREFIX}/aboutme`, (req, res) => {
        aboutController.readAboutMe(req, res);
    });
};
exports.PortfolioRoutes = PortfolioRoutes;
