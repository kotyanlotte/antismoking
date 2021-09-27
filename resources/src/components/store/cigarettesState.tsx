import { atom } from "recoil";

export const cigarettesState = atom<number>({
    key: "cigarettesState",
    default: 0,
});
