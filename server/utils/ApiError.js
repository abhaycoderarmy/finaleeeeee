

class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something went Wrong",
        errors = [],
        stack = ""
    ) {
        super(message),
            (this.statuscode = statuscode),
            (this.message = message),
            (this.errors = errors),
            (this.data = null),
            (this.success = false);

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;
