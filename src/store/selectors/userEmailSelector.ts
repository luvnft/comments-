import { selector } from "recoil";
import { userState } from "../atoms/userState";

export const userEmailSelector = selector({
  key: "userEmailSelector",
  get: ({ get }) => {
    const state = get(userState);
    return state.email;
  },
});
