import { ErrorMessage } from "@/components/types/registerErrorType";

export type LoginErrorType = {
    response: {
        data: {
            errors: Pick<ErrorMessage, "email" | "password">;
        };
    };
};
