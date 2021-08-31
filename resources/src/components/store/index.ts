import { atom } from "recoil";

export const nameState = atom<string>({
    key: "nameState",
    default: "",
});

export const emailState = atom<string>({
    key: "emailState",
    default: "",
});

export const passwordState = atom<string>({
    key: "passwordState",
    default: "",
});

export const passwordConfirmationState = atom<string>({
    key: " passwordConfirmationState",
    default: "",
});
