import axios from "axios";
import { useState } from "react";
import { contentState } from "@/store/atoms/contentState";
import { useRecoilValue } from "recoil";

export default function PostComment() {
  const content = useRecoilValue(contentState);

  const [comment, setComment] = useState<string>();

  const handlePostComment = async () => {
    const response = await axios({
      method: "POST",
      url: "/api/comments/postcomment",
      data: {
        comment: comment,
        contentLink: content.rootUrl,
        authorId: "123",
      },
    });
    console.log(response);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={handlePostComment}>Post comment</button>
    </div>
  );
}
