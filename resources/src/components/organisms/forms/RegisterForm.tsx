import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const RegisterForm: VFC = () => {
    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="nickname"
                placeholder="ニックネームを入力"
                id="nickname"
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                placeholder="メールアドレスを入力"
                id="mail"
            >
                メールアドレス
            </FormInput>
            <FormInput
                htmlFor="password"
                placeholder="パスワードを入力"
                id="password"
            >
                パスワード
            </FormInput>
            <FormInput
                htmlFor="confirmation"
                placeholder="上記と同じパスワードを入力"
                id="confirmation"
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
