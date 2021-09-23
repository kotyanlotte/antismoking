import React, { memo, useCallback, useState, VFC } from "react";
import Modal from "react-modal";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { ModalContents } from "@/components/molecules/ModalContents";

type LogoutModalType = {
    loginStyle: string;
};

export const LogoutModal: VFC<LogoutModalType> = memo(({ loginStyle }) => {
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

    // Warning: react-modal: App element is not defined.の解決
    Modal.setAppElement("#app");

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
                <ModalContents closeModal={closeModal} />
            </Modal>
        </>
    );
});

LogoutModal.displayName = "LogoutModal";
