function responseError(msg: any) {
    return {
        msg: msg,
        status: false
    }
}

function responseSucces(data: any) {
    return {
        data: data,
        status: true
    }
}

export default {
    responseSucces,
    responseError
}
