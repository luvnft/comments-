import Searchbar from "@/components/Searchbar";
import ContentCard from "@/components/ContentCard";
import CommentSection from "./CommentSection";
import { contentState } from "@/store/atoms/contentState";
import { useRecoilValue } from "recoil";

export default function LandingPage() {
  const content = useRecoilValue(contentState);

  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <div className="w-3/5">
        <div>
          <Searchbar />
        </div>
        <div>
          <ContentCard />
        </div>
        {content.rootUrl && (
          <div>
            <CommentSection />
          </div>
        )}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
}
