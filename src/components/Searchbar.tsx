import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import getSourceFromLink from "@/lib/getSourceFromLink";
import {
  getYouTubeVideoId,
  getTweetIdFromUrl,
  getInstagramIdFromUrl,
  getFacebookContentIdFromUrl,
} from "@/lib/getContentId";

export default function Searchbar() {
  const setContentState = useSetRecoilState(contentState);
  const content = useRecoilValue(contentState);

  const handleSearch = () => {
    const linkSource = getSourceFromLink(content.link || "");
    let contentId: any = null;
    if (linkSource === "YouTube") {
      contentId = getYouTubeVideoId(content.link || "");
    }
    if (linkSource === "Twitter") {
      contentId = getTweetIdFromUrl(content.link || "");
    }
    if (linkSource === "Instagram") {
      contentId = getInstagramIdFromUrl(content.link || "");
    }
    if (linkSource === "Facebook") {
      contentId = getFacebookContentIdFromUrl(content.link || "");
    }

    setContentState((prevVideoState) => ({
      ...prevVideoState,
      source: linkSource,
      videoId: contentId,
    }));
  };

  return (
    <div>
      <input
        placeholder="insert link here"
        className="text-black"
        onChange={(e) => {
          setContentState({
            isLoading: true,
            link: e.target.value,
            source: null,
            rootUrl: null,
            contentId: null,
          });
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
