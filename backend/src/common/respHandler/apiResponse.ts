const { STATUS_CODE } = require("./constants");

export class ApiResponse {
  statusCode: any;
  result: any;
  time: number;
  error: any;

  constructor(statusCode:any, result:any) {
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
