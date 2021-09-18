import React, { VFC } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { ForgotPasswordForm } from "@/components/organisms/forms/ForgotPasswordForm";

export const ForgotPasswordArea: VFC = () => {
    return (
        <div className="bg-gray-light py-12 flex justify-center">
            <div className="card w-650 space-y-12">
                <ForgotPasswordForm />
                <Link to="/password/reset">
                    <PrimaryButton style="text-green-default w-52 surface:w-72 border-green-default hover:bg-green-default hover:text-white-default">
                        リセットリンクの送信
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
};
