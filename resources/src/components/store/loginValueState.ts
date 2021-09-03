import { atom } from "recoil";

export const emailLoginState = atom<string>({
    key: "emailLoginState",
    default: "",
});

export const passwordLoginState = atom<string>({
    key: "passwordLoginState",
    default: "",
});
