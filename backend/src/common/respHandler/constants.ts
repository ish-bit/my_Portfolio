export const STATUS_CODE = {
  ERROR: 0,
  SUCCESS: 1,
  INVALID_TOKEN: 1000,
}

export const RESPONSE_STATUS = {
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
}

export const ERROR_TYPE = {
  NOT_FOUND: 'NotFoundError',
  UNAUTHORIZED: 'UnauthorizeError',
  INTERNAL_SERVER_ERROR: 'InternalServerError',
  BAD_REQUEST: 'BadRequestError',
  FORBIDDEN: 'ForbiddenError',
  NOT_IMPLEMENTED: 'NotImplementedError',
  ALREADY_EXISTS: 'AlreadyExistsError',
  NOT_ALLOWED: 'MethodNotAllowedError',
  PCP_CONSTRAINT: 'PcpConstraintError'

}
