import { ErrorMessage } from "@/components/types/registerErrorType";

export type UpdateErrorType = {
    response: {
        data: {
            errors: Pick<ErrorMessage, "name" | "email">;
        };
    };
};
