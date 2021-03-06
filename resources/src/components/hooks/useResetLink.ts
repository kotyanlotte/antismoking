/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom/";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { resetLinkEmailErrorState } from "@/components/store/reset/resetLinkEmailErrorState";
import { resetLinkEmailState } from "@/components/store/reset/resetLinkEmailState";
import { ResetLinkEmailErrorType } from "@/components/types/resetLinkEmailErrorType";
import { ResponseSuccessMessage } from "@/components/types/responseSuccessMessage";

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
            .then((res: ResponseSuccessMessage) => {
                setEmail("");
                setErrorEmail([]);
                setLoading(false);
                toast.success(res.data.message, {
                    autoClose: false,
                });
            })
            .catch((e: ResetLinkEmailErrorType) => {
                setEmail("");
                setErrorEmail(e.response.data.errors.email);
                setLoading(false);
                toast.error(
                    "パスワードリセットリンクを発行することが出来ませんでした。"
                );
            });
    }, [email, history]);

    return { resetLink, loading };
};
