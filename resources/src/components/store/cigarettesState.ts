import { atom } from "recoil";

export const cigarettesState = atom<number | string>({
    key: "cigarettesState",
    default: "",
});
