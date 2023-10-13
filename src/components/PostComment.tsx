import axios from "axios";
import { useState } from "react";
import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";

export default function PostComment() {
  const content = useRecoilValue(contentState);
  let comments: any;
  if (content.comments) {
    comments = content.comments.slice(); // Create a shallow copy of the comments array
  }
  //   let comments: any = [];
  const setContentState = useSetRecoilState(contentState);

  const [comment, setComment] = useState<string>();

  const handlePostComment = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/comments/postcomment",
        data: {
          comment: comment,
          contentLink: content.rootUrl,
          authorId: "123",
        },
      });
      //   console.log("comments right now from postcomment....", comments);
      //   console.log("response after posting comment...", response);
      //   console.log("response.data.comment is ....", response.data.comment);
      //   comments.push(response.data.comment);
      //   console.log("new comments array...", comments);
      let updatedComments = [...comments, response.data.comment];

      setContentState((prevVideoState) => ({
        ...prevVideoState,
        comments: updatedComments,
      }));
    } catch (e) {
      alert("Error occured ");
      console.log(e);
    }
  };
  return (
    <div>
      <input
        className="p-2 m-2 text-black w-2/3"
        placeholder="write your comment here"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={handlePostComment}
        className="bg-amber-600 rounded-xl p-2"
      >
        Post comment
      </button>
    </div>
  );
}
