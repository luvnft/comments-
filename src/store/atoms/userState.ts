import { atom } from "recoil";

export const userState = atom<{
  isLoading: boolean;
  email: string | null;
  role: string | null;
  id: string | null;
}>({
  key: "userState",
  default: {
    isLoading: true,
    email: null,
    role: "user",
    id: null,
  },
});
