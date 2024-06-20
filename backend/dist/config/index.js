"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const baseUrls = {
    local: "http://localhost:8080",
    test: "http://localhost:8080",
    development: "https://dev.lifecycles.io",
    qa: "https://qa.lifecycles.io",
    production: 'https://portal.lifecycles.io',
    load: "https://load.lifecycles.io",
};
const env = process.env.NODE_ENV || 'development';
exports.config = {
    BASE_URL: baseUrls[env],
    API_PREFIX: '/api/v1',
};
