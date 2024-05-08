class ApiResponse {
    statusCode: any;
    data: any;
    message: string;
    success: boolean;
    constructor(statusCode: number ,data: any,message="success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}