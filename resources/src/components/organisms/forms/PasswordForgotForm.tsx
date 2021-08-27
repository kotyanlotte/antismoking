import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const PasswordForgotForm: VFC = () => {
    return (
        <form>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
            >
                パスワード
            </FormInput>
        </form>
    );
};
