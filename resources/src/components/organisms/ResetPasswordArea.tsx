import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { useResetPassword } from "@/components/hooks/useResetPassword";
import { ResetPasswordForm } from "@/components/molecules/forms/ResetPasswordForm";

export const ResetPasswordArea: VFC = () => {
    const { resetPassword, loading } = useResetPassword();

    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-12">
                <h2 className="text-green-dark font-bold">
                    パスワードのリセット
                </h2>
                <ResetPasswordForm />
                <PrimaryButton
                    style="text-green-default w-52 md:w-72 border-green-default hover:bg-green-default hover:text-white-default"
                    onClick={resetPassword}
                    loading={loading}
                >
                    パスワードの更新
                </PrimaryButton>
            </div>
        </div>
    );
};
