"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception {
    constructor(errType, message, stackTrace) {
        this.errType = errType;
        this.message = message;
        if (stackTrace) {
            this.err = stackTrace;
        }
    }
}
exports.Exception = Exception;
