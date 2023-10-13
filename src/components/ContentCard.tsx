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

export default function ContentCard() {
  const content = useRecoilValue(contentState);
  console.log("contentID from ContentCard...", content.contentId);
  console.log("baseURL from ContentCard...", content.rootUrl);

  return (
    <div className="p-2 m-2">
      {content.source === "YouTube" && (
        <div>
          <YouTube videoId={content.contentId || ""} />
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
