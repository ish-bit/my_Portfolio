const ApiResponse = require('./apiResponse')
const exception = require('./customException')
const { STATUS_CODE, ERROR_TYPE, RESPONSE_STATUS } = require('./constants')

let result

function sendResponse(res:any, rslt:any, statusCode = undefined) {
  let err = rslt && rslt.error
  if (err) {
switch (err.errType) {
      case ERROR_TYPE.UNAUTHORIZED:
        return res.status(RESPONSE_STATUS.UNAUTHORIZED).send(rslt)
      case ERROR_TYPE.INTERNAL:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt)
      case ERROR_TYPE.BAD_REQUEST:
        return res.status(RESPONSE_STATUS.BAD_REQUEST).send(rslt)
      case ERROR_TYPE.NOT_IMPLEMENTED:
        return res.status(RESPONSE_STATUS.NOT_IMPLEMENTED).send(rslt)
      case ERROR_TYPE.ALREADY_EXISTS:
        return res.status(RESPONSE_STATUS.ALREADY_EXISTS).send(rslt)
      case ERROR_TYPE.NOT_ALLOWED:
        return res.status(RESPONSE_STATUS.NOT_ALLOWED).send(rslt)
      case ERROR_TYPE.FORBIDDEN:
        return res.status(RESPONSE_STATUS.FORBIDDEN).send(rslt)
      case ERROR_TYPE.NOT_FOUND:
        return res.status(RESPONSE_STATUS.NOT_FOUND).send(rslt)
      default:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send(rslt)
    }
  }

  if (statusCode) return res.status(statusCode).send(rslt)
  return res.status(RESPONSE_STATUS.SUCCESS).send(rslt)
}

function sendError(res:any, err:any) {
  if (!err?.errType) {
    err = exception.internalServerError(err)
  }
  result = new ApiResponse(STATUS_CODE.ERROR, err)
  sendResponse(res, result)
}

function handleError(err:any, req:any, res:any, next:any) {
  sendError(res, err)
}

function sendSuccess(res:any, result:any, statusCode = RESPONSE_STATUS.SUCCESS) {
  result = new ApiResponse(STATUS_CODE.SUCCESS, result)
  sendResponse(res, result, statusCode)
}

module.exports = {
  sendResponse,
  sendError,
  handleError,
  sendSuccess,
}
