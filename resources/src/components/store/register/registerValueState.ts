import { atom } from "recoil";

export const nameState = atom<string>({
    key: "nameState",
    default: "",
});

export const emailRegisterState = atom<string>({
    key: "emailRegisterState",
    default: "",
});

export const passwordRegisterState = atom<string>({
    key: "passwordRegisterState",
    default: "",
});

export const passwordConfirmationState = atom<string>({
    key: " passwordConfirmationState",
    default: "",
});
