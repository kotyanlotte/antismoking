import { atom } from "recoil";

export const errorNameState = atom<string[]>({
    key: "errorNameState",
    default: [],
});

export const errorEmailState = atom<string[]>({
    key: "errorEmailState",
    default: [],
});

export const errorPasswordState = atom<string[]>({
    key: "errorPasswordState",
    default: [],
});
