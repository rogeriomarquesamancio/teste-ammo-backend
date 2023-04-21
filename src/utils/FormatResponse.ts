interface IGenericResponse<T> {
    data: T,
    msg: string | null,
    status: boolean
}

class FormatResponse {
    public success<T>(data: T): IGenericResponse<T> {
        return {
            data: data,
            msg: null,
            status: true
        };
    }

    public error(message: string): IGenericResponse<null> {
        return {
            data: null,
            msg: message,
            status: false
        };
    }
}

export default new FormatResponse();
