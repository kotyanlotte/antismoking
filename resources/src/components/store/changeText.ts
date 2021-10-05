import { atom } from "recoil";

export const changeTextState = atom<string>({
    key: "changeTextState",
    default: "",
});
