import YouTube from "react-youtube";
import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";

export default function ContentCard() {
  const content = useRecoilValue(contentState);

  return (
    <div>
      {content.source === "YouTube" && (
        <YouTube videoId={content.contentId || ""} />
      )}
      {content.source === "Twitter" && (
        <TwitterTweetEmbed tweetId={content.contentId || ""} />
      )}
      {content.source === "Instagram" && (
        <InstagramEmbed url={content.link || ""} width={328} />
      )}
      {content.source === "Facebook" && (
        <FacebookEmbed url={content.link || ""} width={325} />
      )}
    </div>
  );
}
