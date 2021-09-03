import { atom } from "recoil";

export const errorNameState = atom<string[]>({
    key: "errorNameState",
    default: [],
});

export const errorEmailRegisterState = atom<string[]>({
    key: "errorEmailRegisterState",
    default: [],
});

export const errorPasswordRegisterState = atom<string[]>({
    key: "errorPasswordRegisterState",
    default: [],
});

export const errorPasswordConfirmationState = atom<string[]>({
    key: "errorPasswordConfirmationState",
    default: [],
});
