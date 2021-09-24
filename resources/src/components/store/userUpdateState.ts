import { atom } from "recoil";

export const updateNameState = atom<string>({
    key: "updateNameState",
    default: "",
});

export const updateEmailState = atom<string>({
    key: "updateEmailState",
    default: "",
});
