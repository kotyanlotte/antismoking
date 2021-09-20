import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { resetLinkEmailErrorState } from "@/components/store/resetLinkEmailErrorState";
import { resetLinkEmailState } from "@/components/store/resetLinkEmailState";
import { ResetLinkEmailErrorType } from "@/components/types/resetLinkEmailErrorType";
import { ResetLinkSuccessMessage } from "@/components/types/resetLinkSuceesMessage";

type ResetLinkReturnType = {
    resetLink: () => void;
    loading: boolean;
};

export const useResetLink = (): ResetLinkReturnType => {
    const [email, setEmail] = useRecoilState(resetLinkEmailState);
    const setErrorEmail = useSetRecoilState(resetLinkEmailErrorState);
    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const history = useHistory<History>();

    const resetLink = useCallback(async () => {
        setLoading(true);
        await axios
            .post("/forgot-password", {
                email: email,
            })
            .then((res: ResetLinkSuccessMessage) => {
                toast.success(res.data.message, {
                    autoClose: false,
                });
                setLoading(false);
                setEmail("");
            })
            .catch((e: ResetLinkEmailErrorType) => {
                console.log(e.response);
                setLoading(false);
                setEmail("");
                setErrorEmail(e.response.data.errors.email);
                toast.error(
                    "パスワードリセットリンクを発行することが出来ませんでした。"
                );
            });
    }, [email, history]);

    return { resetLink, loading };
};
