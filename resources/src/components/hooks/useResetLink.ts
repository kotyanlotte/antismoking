import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { resetLinkEmailErrorState } from "@/components/store/resetLinkEmailErrorState";
import { resetLinkEmailState } from "@/components/store/resetLinkEmailState";
import { ResetLinkEmailErrorType } from "@/components/types/resetLinkEmailErrorType";
import { ResetLinkSuccessMessage } from "@/components/types/resetLinkSuceesMessage";

type ResetLinkReturnType = {
    resetLink: () => void;
};

export const useResetLink = (): ResetLinkReturnType => {
    const [email, setEmail] = useRecoilState(resetLinkEmailState);
    const setErrorEmail = useSetRecoilState(resetLinkEmailErrorState);

    const history = useHistory<History>();

    const resetLink = useCallback(async () => {
        await axios
            .post("/forgot-password", {
                email: email,
            })
            .then((res: ResetLinkSuccessMessage) => {
                toast.success(res.data.message, {
                    autoClose: false,
                });
                setEmail("");
            })
            .catch((e: ResetLinkEmailErrorType) => {
                setEmail("");
                setErrorEmail(e.response.data.errors.email);
            });
    }, [email, history]);

    return { resetLink };
};
