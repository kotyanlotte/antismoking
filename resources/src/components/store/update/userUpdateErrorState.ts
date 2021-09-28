import { atom } from "recoil";

export const updateNameErrorState = atom<string[]>({
    key: "updateNameErrorState",
    default: [],
});

export const updateEmailErrorState = atom<string[]>({
    key: "updateEmailErrorState",
    default: [],
});
