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
import { useState } from "react";
import { useRouter } from "next/router";

export default function Searchbar() {
  const router = useRouter();
  const setContentState = useSetRecoilState(contentState);
  const content = useRecoilValue(contentState);
  const [currentLink, setCurrentLink] = useState<string>();

  const handleSearch = async (inputString: string | null) => {
    if (inputString && inputString[0] === "@") {
      router.push(`/user/${inputString.slice(1)}`);
    } else {
      handleLinkSearch(inputString);
    }
  };

  const handleLinkSearch = async (link: string | null) => {
    setContentState({
      isLoading: true,
      link: link,
      source: null,
      rootUrl: null,
      contentId: null,
      comments: null,
    });

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
        className="text-black w-80 p-2 m-2"
        onChange={(e) => {
          setCurrentLink(e.target.value);
        }}
      />
      <button
        className="bg-amber-600 rounded-xl p-2"
        onClick={() => {
          handleSearch(currentLink || null);
        }}
      >
        Search
      </button>
    </div>
  );
}
