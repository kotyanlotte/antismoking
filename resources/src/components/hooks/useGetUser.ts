/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@/components/store/login/loginUserState";
import { userState } from "@/components/store/userState";
import { User } from "@/components/types/userType";

type GetUserReturnType = {
    getUser: () => void;
};

export const useGetUser = (): GetUserReturnType => {
    const setUser = useSetRecoilState(userState);

    const setLoggedIn = useSetRecoilState(isLoggedInState);

    const history = useHistory<History>();

    const getUser = useCallback(async () => {
        await axios
            .get<User>("api/user")
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                toast.error(
                    "ユーザーが見つかりませんでした。再度ログインし直してください"
                );
                setLoggedIn(false);
                history.push("/login");
            });
    }, []);

    return {
        getUser,
    };
};
