import React, { VFC } from "react";

import { LoginFormInput } from "@/components/molecules/forms/LoginFormInput";

export const LoginForm: VFC = () => {
    return (
        <form className="space-y-9">
            <LoginFormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                id="mail"
            >
                メールアドレス
            </LoginFormInput>
            <LoginFormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
            >
                パスワード
            </LoginFormInput>
        </form>
    );
};
