import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import ContentCard from "@/components/ContentCard";
import PostComment from "@/components/PostComment";
import Comments from "@/components/Comments";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Searchbar />
      </div>
      <div>
        <ContentCard />
      </div>
      <div>
        <PostComment />
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
}
