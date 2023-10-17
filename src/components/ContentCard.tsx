import YouTube from "react-youtube";
import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  InstagramEmbed,
  FacebookEmbed,
  YouTubeEmbed,
  TwitterEmbed,
} from "react-social-media-embed";
import { useEffect, useState } from "react";

export default function ContentCard() {
  const content = useRecoilValue(contentState);
  console.log("contentID from ContentCard...", content.contentId);
  console.log("baseURL from ContentCard...", content.rootUrl);

  useEffect(() => {}, [content]);

  return (
    <div className="p-2 m-2">
      {content.source === "YouTube" && (
        <div>
          <div className="hidden sm:block">
            <YouTube videoId={content.contentId || ""} />
          </div>
          <div className="sm:hidden">
            <YouTube className="w-auto" videoId={content.contentId || ""} />
          </div>
        </div>
      )}
      {content.source === "Twitter" && (
        <div>
          <TwitterEmbed url={content.link || ""} />
        </div>
      )}
      {content.source === "Instagram" && (
        <div>
          <InstagramEmbed url={content.link || ""} width={328} />
        </div>
      )}
      {content.source === "Facebook" && (
        <div>
          <FacebookEmbed url={content.link || ""} width={325} />
        </div>
      )}
      <div className="flex">
        {content.source && <div>Source: </div>} {content.source}
      </div>
      {/* <div>{content.link}</div>
      <div>{content.contentId}</div> */}
    </div>
  );
}
