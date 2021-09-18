import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const ForgotPasswordForm: VFC = () => {
    const [email, setEmail] = useRecoilState(resetLinkEmailState);
    // パスワードリセットリンク発行のためのメールアドレスを取得する関数
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        []
    );

    return (
        <form>
            <FormInput
                htmlFor="email"
                placeholder="メールアドレスを入力"
                type="mail"
                value={email}
                onChange={onChangeEmail}
            >
                メールアドレス
            </FormInput>
        </form>
    );
};
