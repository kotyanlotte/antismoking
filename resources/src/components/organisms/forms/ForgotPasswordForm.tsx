import React, { useCallback, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FormInput } from "@/components/molecules/forms/FormInput";
import { resetLinkEmailErrorState } from "@/components/store/resetLinkEmailErrorState";
import { resetLinkEmailState } from "@/components/store/resetLinkEmailState";

export const ForgotPasswordForm: VFC = () => {
    const [email, setEmail] = useRecoilState(resetLinkEmailState);
    const errorEmail = useRecoilValue(resetLinkEmailErrorState);

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
                error={errorEmail}
            >
                メールアドレス
            </FormInput>
        </form>
    );
};
