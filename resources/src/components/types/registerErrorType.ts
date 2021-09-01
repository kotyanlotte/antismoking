export type RegisterErrorType = {
    response: {
        data: {
            errors: {
                name: string[];
                email: string[];
                password: string[];
            };
        };
    };
};
