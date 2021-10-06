/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { isLoggedInGuestState } from "@/components/store/login/loginGuestUserState";

type GuestLoginReturnType = {
    guestLogin: () => void;
};

export const useGuestLogin = (): GuestLoginReturnType => {
    const setLoggedInGuest = useSetRecoilState(isLoggedInGuestState);

    const history = useHistory<History>();

    const guestLogin = useCallback(async () => {
        await axios
            .post("api/login/guest", {
                email: "test@test.com",
                password: "password",
            })
            .then(() => {
                setLoggedInGuest(true);
                history.push("/home");
            })
            .catch(() => {
                history.push("/about");
            });
    }, [history]);

    return {
        guestLogin,
    };
};
