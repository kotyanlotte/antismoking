import { atom } from "recoil";

export const cigarettesState = atom<string>({
    key: "cigarettesState",
    default: "",
});
