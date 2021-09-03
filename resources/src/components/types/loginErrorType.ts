import { ErrorMessage } from "@/components/types/registerErrorType";

export type LoginErrorType = {
    response: {
        data: {
            error: Pick<ErrorMessage, "email" | "password">;
        };
    };
};
