import React, { memo, useCallback, useState, VFC } from "react";
import Modal from "react-modal";

import { PrimaryButton } from "@/components/atoms/buttons/PrimaryButton";
import { ModalContents } from "@/components/molecules/ModalContents";

type LogoutAndDeleteModalType = {
    loginStyle: string;
    text: string;
    label: string;
    title: string;
    confirm?: string;
    yes: string;
    height: string;
};

export const LogoutAndDeleteModal: VFC<LogoutAndDeleteModalType> = memo(
    ({ loginStyle, text, label, title, confirm, yes, height }) => {
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
                height: height,
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
                    {text}
                </PrimaryButton>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel={label}
                >
                    <ModalContents
                        closeModal={closeModal}
                        title={title}
                        confirm={confirm}
                        yes={yes}
                    />
                </Modal>
            </>
        );
    }
);

LogoutAndDeleteModal.displayName = "LogoutAndDeleteModal";
