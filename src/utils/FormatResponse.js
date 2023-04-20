"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function responseError(msg) {
    return {
        msg: msg,
        status: false
    };
}
function responseSucces(data) {
    return {
        data: data,
        status: true
    };
}
exports.default = {
    responseSucces,
    responseError
};
