import { Magic } from "magic-sdk";
// import { SolanaExtension } from "@magic-ext/solana";
import { useState, useEffect, useRef } from "react";
// import Modal from "react-modal";
import axios from "axios";
import { useRouter } from "next/router";
import { userState } from "@/store/atoms/userState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  userIdSelector,
  publicAddressSelector,
} from "@/store/selectors/userDetailsSelector";
import { MAGIC_LINK_API_KEY, RPC_URL } from "@/constants";

let magic: any = null;

// if (typeof window !== "undefined") {
//   magic = new Magic(MAGIC_LINK_API_KEY || "", {
//     extensions: [
//       new SolanaExtension({
//         rpcUrl: RPC_URL,
//       }),
//     ],
//   });
// }

export default function InitUser() {
  return <></>;
}
