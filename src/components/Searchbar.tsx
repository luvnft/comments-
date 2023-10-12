import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import getSourceFromLink from "@/lib/getSourceFromLink";
import {
  getYouTubeVideoId,
  getTweetIdFromUrl,
  getInstagramIdFromUrl,
  getFacebookContentIdFromUrl,
} from "@/lib/getContentId";

import {
  getFacebookBaseUrl,
  getInstagramBaseUrl,
  getTwitterXBaseUrl,
  getYouTubeBaseUrl,
} from "@/lib/getBaseUrl";
import axios from "axios";

export default function Searchbar() {
  const setContentState = useSetRecoilState(contentState);
  const content = useRecoilValue(contentState);

  const handleSearch = async () => {
    const linkSource = getSourceFromLink(content.link || "");
    let contentId: any = null;
    let baseURL: any = null;
    if (linkSource === "YouTube") {
      contentId = getYouTubeVideoId(content.link || "");
      baseURL = await getYouTubeBaseUrl(content.link || "");
      console.log("here's the content id...", contentId);
      console.log("here's the baseURL...", baseURL);
    }
    if (linkSource === "Twitter") {
      contentId = getTweetIdFromUrl(content.link || "");
      baseURL = await getTwitterXBaseUrl(content.link || "");
      console.log("here's the content id...", contentId);
      console.log("here's the baseURL...", baseURL);
    }
    if (linkSource === "Instagram") {
      contentId = getInstagramIdFromUrl(content.link || "");
      baseURL = await getInstagramBaseUrl(content.link || "");
      console.log("here's the content id...", contentId);
      console.log("here's the baseURL...", baseURL);
    }
    if (linkSource === "Facebook") {
      contentId = getFacebookContentIdFromUrl(content.link || "");
      baseURL = await getFacebookBaseUrl(content.link || "");
      console.log("here's the content id...", contentId);
      console.log("here's the baseURL...", baseURL);
    }

    //get comments
    let response: any = await axios({
      method: "GET",
      url: "api/comments/getComments",
      params: {
        baseURL,
      },
    });
    console.log("comments fetched.....", response);
    setContentState((prevVideoState) => ({
      ...prevVideoState,
      source: linkSource,
      contentId: contentId,
      rootUrl: baseURL,
      comments: response.data.comments,
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
            comments: null,
          });
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
