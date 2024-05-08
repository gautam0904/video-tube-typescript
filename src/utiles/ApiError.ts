class ApiError extends Error {
    statusCode: string;
    data: null;
    errors: never[];
    constructor(
        statusCode: string,
        message ="somthing thing failed",
        errors= [],
        stack= ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.message = message;

        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}