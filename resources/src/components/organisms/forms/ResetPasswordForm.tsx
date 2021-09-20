import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const ResetPasswordForm: VFC = () => {
    return (
        <form className="space-y-9">
            <FormInput htmlFor="mail" placeholder="メールアドレスを入力">
                メールアドレス
            </FormInput>
            <FormInput htmlFor="password" placeholder="パスワードを入力">
                パスワード
            </FormInput>
            <FormInput
                htmlFor="confirmation"
                placeholder="上記と同じパスワードを入力"
            >
                パスワード(確認用)
            </FormInput>
        </form>
    );
};
