import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { useResetLink } from "@/components/hooks/useResetLink";
import { ForgotPasswordForm } from "@/components/organisms/forms/ForgotPasswordForm";

export const ForgotPasswordArea: VFC = () => {
    const { resetLink } = useResetLink();

    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-12">
                <ForgotPasswordForm />
                <PrimaryButton
                    style="text-green-default w-52 surface:w-72 border-green-default hover:bg-green-default hover:text-white-default"
                    onClick={resetLink}
                >
                    リセットリンクの送信
                </PrimaryButton>
            </div>
        </div>
    );
};
