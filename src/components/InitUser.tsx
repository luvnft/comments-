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

const MAGIC_LINK_API_KEY = "pk_live_6A10D6F34E44BACC"; // publishable API key,access restricted from backend
const RPC_URL =
  "https://quick-wispy-putty.solana-devnet.discover.quiknode.pro/096b8d81216c78e4382b64e8dfdcfa1675fc03e4/";
// const rpcUrl = "https://api.devnet.solana.com";
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
