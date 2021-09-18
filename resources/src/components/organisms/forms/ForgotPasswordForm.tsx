import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const ForgotPasswordForm: VFC = () => {
    return (
        <form>
            <FormInput htmlFor="email" placeholder="メールアドレスを入力">
                メールアドレス
            </FormInput>
        </form>
    );
};
