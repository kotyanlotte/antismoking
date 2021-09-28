import { atom } from "recoil";

export const resetPasswordEmailState = atom<string>({
    key: "resetPasswordEmailState",
    default: "",
});

export const resetPasswordState = atom<string>({
    key: "resetPasswordState",
    default: "",
});

export const resetPasswordConfirmationState = atom<string>({
    key: "resetPasswordConfirmationState",
    default: "",
});
