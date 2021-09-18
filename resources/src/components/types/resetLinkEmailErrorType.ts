import { ErrorMessage } from "@/components/types/registerErrorType";

export type ResetLinkEmailErrorType = {
    response: {
        data: {
            errors: Pick<ErrorMessage, "email">;
        };
    };
};
