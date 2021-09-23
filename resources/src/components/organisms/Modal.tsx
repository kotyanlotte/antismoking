import React, { useCallback, useState, VFC } from "react";
import Modal from "react-modal";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";

type LogoutModalType = {
    loginStyle: string;
};

export const LogoutModal: VFC<LogoutModalType> = ({ loginStyle }) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    // modalのstyle
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            padding: "20px",
            transform: "translate(-50%, -50%)",
            width: "min(80%,500px)",
            height: "50%",
        },
    };

    // modalを閉じる関数
    const closeModal = useCallback(() => {
        setModalIsOpen(false);
    }, []);

    // modalを開く関数
    const openModal = useCallback(() => {
        setModalIsOpen(true);
    }, []);

    return (
        <>
            <PrimaryButton
                onClick={openModal}
                style={"btn-bg-green"}
                loginStyle={loginStyle}
            >
                ログアウト
            </PrimaryButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Logout Modal"
            >
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
            </Modal>
        </>
    );
};
