"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutMe = void 0;
const config_1 = require("../../config");
const controller_1 = require("./controller");
const aboutMe = ({ app, logger }) => {
    const aboutController = new controller_1.AboutController(logger);
    app.get(`${config_1.config.API_PREFIX}/sites`, (req, res) => {
        aboutController.readAboutMe(req, res);
    });
};
exports.aboutMe = aboutMe;
