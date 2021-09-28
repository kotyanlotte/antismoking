import { atom } from "recoil";

export const errorEmailLoginState = atom<string[]>({
    key: "errorEmailLoginState",
    default: [],
});

export const errorPasswordLoginState = atom<string[]>({
    key: "errorPasswordLoginState",
    default: [],
});
