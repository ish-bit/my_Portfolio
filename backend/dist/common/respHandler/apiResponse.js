"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const { STATUS_CODE } = require("./constants");
class ApiResponse {
    constructor(statusCode, result) {
        this.statusCode = statusCode;
        if (statusCode == STATUS_CODE.SUCCESS) {
            result ? this.result = result : {};
        }
        else {
            result ? this.error = result : {};
        }
        this.time = new Date().getTime();
    }
}
exports.ApiResponse = ApiResponse;
