import { atom } from "recoil";

export const resetPasswordEmailErrorState = atom<string[]>({
    key: "resetPasswordEmailErrorState",
    default: [],
});

export const resetPasswordErrorState = atom<string[]>({
    key: "resetPasswordErrorState",
    default: [],
});

export const resetPasswordConfirmationErrorState = atom<string[]>({
    key: "resetPasswordConfirmationErrorState",
    default: [],
});
