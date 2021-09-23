/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { isLoadingButton } from "@/components/store/buttonSpinner";
import { isLoggedInState } from "@/components/store/loginUserState";

type LogoutReturnType = {
    logout: () => void;
    loading: boolean;
};

export const useLogout = (): LogoutReturnType => {
    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const [loading, setLoading] = useRecoilState(isLoadingButton);

    const history = useHistory();

    const logout = useCallback(async () => {
        setLoading(true);
        await axios
            .post("/logout")
            .then(() => {
                toast.success("ログアウトに成功しました");
                setLoggedIn(false);
                history.push("/login");
                setLoading(false);
            })
            .catch(() => {
                toast.error("ログアウトに失敗です。");
                setLoading(false);
            });
    }, [history]);

    return {
        logout,
        loading,
    };
};
