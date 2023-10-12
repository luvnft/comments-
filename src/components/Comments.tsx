import { contentState } from "@/store/atoms/contentState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

export default function Comments() {
  const content = useRecoilValue(contentState);
  let comments = content.comments;

  if (comments) {
    return (
      <div>
        {comments.map((comment: any) => {
          return <div key={comment.id}>{comment.comment}</div>;
        })}
      </div>
    );
  }
  return <div></div>;
}
