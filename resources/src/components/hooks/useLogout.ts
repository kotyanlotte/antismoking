/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@/components/store/loginUserState";

type LogoutReturnType = {
    logout: () => void;
};

export const useLogout = (): LogoutReturnType => {
    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const history = useHistory();

    const logout = useCallback(async () => {
        await axios
            .post("/logout")
            .then(() => {
                toast.success("ログアウトに成功しました");
                setLoggedIn(false);
                history.push("/login");
            })
            .catch(() => {
                toast.error("ログアウトに失敗です。");
            });
    }, [history]);

    return {
        logout,
    };
};
