import React, { memo, VFC } from "react";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { useLogout } from "@/components/hooks/useLogout";

type ModalContentsType = {
    closeModal: () => void;
    title: string;
    confirm?: string;
    yes: string;
    onClick: () => void;
};

export const ModalContents: VFC<ModalContentsType> = memo(
    ({ closeModal, title, confirm, yes, onClick }) => {
        const { loading } = useLogout();

        return (
            <div className="space-y-8 flex flex-col justify-center items-center surface:space-y-12">
                <h2 className="flex justify-center text-xl font-bold surface:text-2xl">
                    {title}
                </h2>
                {confirm && (
                    <h2 className="flex justify-center text-xl font-bold surface:text-2xl">
                        {confirm}
                    </h2>
                )}
                <div className="space-y-5 flex flex-col">
                    <PrimaryButton
                        style="w-44 border-green-default md:px-4 hover:bg-green-default hover:text-white-default"
                        onClick={onClick}
                        loading={loading}
                    >
                        {yes}
                    </PrimaryButton>
                    <PrimaryButton
                        style="w-44 border-red-default md:px-4 hover:bg-red-default hover:text-white-default"
                        onClick={closeModal}
                    >
                        キャンセル
                    </PrimaryButton>
                </div>
            </div>
        );
    }
);

ModalContents.displayName = "ModalContents";
