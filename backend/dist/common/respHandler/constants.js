"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_TYPE = exports.RESPONSE_STATUS = exports.STATUS_CODE = void 0;
exports.STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1,
    INVALID_TOKEN: 1000,
};
exports.RESPONSE_STATUS = {
    SUCCESS: 200,
    SUCCESS_CREATED: 201,
    SUCCESS_NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    ALREADY_EXISTS: 409,
    PCP_CONSTRAINT: 400
};
exports.ERROR_TYPE = {
    NOT_FOUND: 'NotFoundError',
    UNAUTHORIZED: 'UnauthorizeError',
    INTERNAL_SERVER_ERROR: 'InternalServerError',
    BAD_REQUEST: 'BadRequestError',
    FORBIDDEN: 'ForbiddenError',
    NOT_IMPLEMENTED: 'NotImplementedError',
    ALREADY_EXISTS: 'AlreadyExistsError',
    NOT_ALLOWED: 'MethodNotAllowedError',
    PCP_CONSTRAINT: 'PcpConstraintError'
};
