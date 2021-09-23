import React, { VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type ModalContentsType = {
    closeModal: () => void;
};

export const ModalContents: VFC<ModalContentsType> = ({ closeModal }) => {
    return (
        <div className="space-y-12 flex flex-col justify-center items-center">
            <h2 className="flex justify-center text-2xl font-bold">
                ログアウトしますか？
            </h2>
            <div className="space-y-5 flex flex-col">
                <PrimaryButton style="w-44 border-green-default hover:bg-green-default hover:text-white-default">
                    はい
                </PrimaryButton>
                <PrimaryButton
                    style="w-44 border-red-default hover:bg-red-default hover:text-white-default"
                    onClick={closeModal}
                >
                    いいえ
                </PrimaryButton>
            </div>
        </div>
    );
};
