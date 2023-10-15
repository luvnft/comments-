import Image from "next/image";
import { Inter } from "next/font/google";

import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <LandingPage />
      <div className="min-h-[50vh]"></div>
    </div>
  );
}
