import axios from "axios";
import { useState } from "react";
import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userIdSelector } from "@/store/selectors/userDetailsSelector";
import { usernameSelector } from "@/store/selectors/userDetailsSelector";
import { publicAddressSelector } from "@/store/selectors/userDetailsSelector";
import { balanceSelector } from "@/store/selectors/userDetailsSelector";

export default function PostComment() {
  const content = useRecoilValue(contentState);
  const userID = useRecoilValue(userIdSelector);
  const username = useRecoilValue(usernameSelector);
  const authorPublicAddress = useRecoilValue(publicAddressSelector);
  const userBalance = useRecoilValue(balanceSelector);

  let comments: any;
  if (content.comments) {
    comments = content.comments.slice(); // Create a shallow copy of the comments array
  }
  //   let comments: any = [];
  const setContentState = useSetRecoilState(contentState);

  const [comment, setComment] = useState<string>();

  const handlePostComment = async () => {
    if (userBalance < 10000000) {
      alert("Balance is low. Please add minimum of 0.01 SOL to your account.");
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: "/api/comments/postcomment",
        data: {
          comment: comment,
          contentLink: content.rootUrl,
          authorUsername: username,
          authorPublicAddress: authorPublicAddress,
        },
      });
      //   console.log("comments right now from postcomment....", comments);
      //   console.log("response after posting comment...", response);
      //   console.log("response.data.comment is ....", response.data.comment);
      //   comments.push(response.data.comment);
      //   console.log("new comments array...", comments);
      let updatedComments = [response.data.comment, ...comments];

      setContentState((prevVideoState) => ({
        ...prevVideoState,
        comments: updatedComments,
      }));
    } catch (e) {
      alert("Error occured ");
      console.log(e);
    }
  };
  console.log("userId from post comment is ...", userID);

  return userID === null ? (
    <div className=" p-2 m-2 rounded-lg bg-[#2f2f2f] hover:bg-[#1f1f1f]">
      Log in to comment
    </div>
  ) : (
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
