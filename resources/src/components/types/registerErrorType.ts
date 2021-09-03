export type RegisterErrorType = {
    response: {
        data: {
            errors: ErrorMessage;
        };
    };
};

export type ErrorMessage = {
    name: string[];
    email: string[];
    password: string[];
    password_confirmation: string[];
};
