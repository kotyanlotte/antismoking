import React, { useEffect, VFC } from "react";
import { useRecoilState } from "recoil";

import { useGuestLogout } from "@/components/hooks/useGuestLogout";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { LoginArea } from "@/components/organisms/LoginArea";
import { isLoggedInGuestState } from "@/components/store/login/loginGuestUserState";

export const Login: VFC = () => {
    const [isLoggedInGuest, setLoggedInGuest] =
        useRecoilState(isLoggedInGuestState);
    const { guestLogout } = useGuestLogout();

    useEffect(() => {
        if (isLoggedInGuest) {
            setLoggedInGuest(false);
            guestLogout();
        }
    }, []);

    return (
        <>
            <Header />
            <LoginArea />
            <Footer />
        </>
    );
};
