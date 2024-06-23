"use strict";
const ApiResponse = require('./apiResponse');
const exception = require('./cutomException');
const { STATUS_CODE, ERROR_TYPE, RESPONSE_STATUS } = require('./constants');
let result;
function sendResponse(res, rslt, statusCode = undefined) {
    let err = rslt && rslt.error;
    if (err) {
        switch (err.errType) {
            case ERROR_TYPE.UNAUTHORIZED:
                return res.status(RESPONSE_STATUS.UNAUTHORIZED).send(rslt);
            case ERROR_TYPE.INTERNAL:
                return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt);
            case ERROR_TYPE.BAD_REQUEST:
                return res.status(RESPONSE_STATUS.BAD_REQUEST).send(rslt);
            case ERROR_TYPE.NOT_IMPLEMENTED:
                return res.status(RESPONSE_STATUS.NOT_IMPLEMENTED).send(rslt);
            case ERROR_TYPE.ALREADY_EXISTS:
                return res.status(RESPONSE_STATUS.ALREADY_EXISTS).send(rslt);
            case ERROR_TYPE.NOT_ALLOWED:
                return res.status(RESPONSE_STATUS.NOT_ALLOWED).send(rslt);
            case ERROR_TYPE.FORBIDDEN:
                return res.status(RESPONSE_STATUS.FORBIDDEN).send(rslt);
            case ERROR_TYPE.NOT_FOUND:
                return res.status(RESPONSE_STATUS.NOT_FOUND).send(rslt);
            default:
                return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt);
        }
    }
    if (statusCode)
        return res.status(statusCode).send(rslt);
    return res.status(RESPONSE_STATUS.SUCCESS).send(rslt);
}
function sendError(res, err) {
    if (!(err === null || err === void 0 ? void 0 : err.errType)) {
        err = exception.internalServerError(err);
    }
    result = new ApiResponse(STATUS_CODE.ERROR, err);
    sendResponse(res, result);
}
function handleError(err, req, res, next) {
    sendError(res, err);
}
function sendSuccess(res, result, statusCode = RESPONSE_STATUS.SUCCESS) {
    result = new ApiResponse(STATUS_CODE.SUCCESS, result);
    sendResponse(res, result, statusCode);
}
module.exports = {
    sendResponse,
    sendError,
    handleError,
    sendSuccess,
};
