import React, { VFC } from "react";

import { FormInput } from "@/components/molecules/forms/FormInput";

export const UpdateForm: VFC = () => {
    return (
        <form className="space-y-9">
            <FormInput
                htmlFor="name"
                placeholder="新しいニックネームを入力"
                type="text"
            >
                ニックネーム
            </FormInput>
            <FormInput
                htmlFor="mail"
                placeholder="新しいメールアドレスを入力"
                type="email"
            >
                メールアドレス
            </FormInput>
        </form>
    );
};
