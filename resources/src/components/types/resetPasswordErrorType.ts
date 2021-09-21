import { ErrorMessage } from "@/components/types/registerErrorType";

export type resetPasswordErrorType = {
    response: {
        data: {
            errors: Pick<
                ErrorMessage,
                "email" | "password" | "password_confirmation"
            >;
        };
    };
};
