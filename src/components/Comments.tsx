import { contentState } from "@/store/atoms/contentState";
import { contentCommentSelector } from "@/store/selectors/contentCommentSelector";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
  const content = useRecoilValue(contentState);
  let comments = content.comments;
  const setContentState = useSetRecoilState(contentState);

  if (comments) {
    return (
      <div>
        {comments.map((comment: any) => {
          return (
            <div key={comment.id}>
              <div>{comment.comment}</div>
              <div>{comment.likes.length} likes</div>
              <button
                className="p-2 rounded-lg border text-white"
                onClick={async () => {
                  try {
                    let response: any = await axios({
                      method: "POST",
                      url: "api/user/likeComment",
                      data: {
                        userId: "789", //change later
                        commentId: comment.id,
                      },
                    });

                    // Check if the response indicates an error
                    if (response.data.error) {
                      // Handle the error by displaying an alert or a user-friendly message
                      alert("Error: " + response.data.error);
                    }
                    console.log("updated comment...", response);
                    const updatedComment = response.data.updatedComment;
                    // Find the index of the comment you want to update
                    const commentIndex = comments.findIndex(
                      (comment: any) => comment.id === updatedComment.id
                    );

                    if (commentIndex !== -1) {
                      // Create a new array with the updated comment
                      const updatedComments = [...comments];
                      updatedComments[commentIndex] = updatedComment;

                      // Set the updated comments using setComments
                      setContentState((prevVideoState) => ({
                        ...prevVideoState,
                        comments: updatedComments,
                      }));
                    }
                  } catch (error) {
                    // Handle any network errors or other unexpected issues
                    console.error("An error occurred:", error);
                    alert("An error occurred. Please try again later.");
                  }
                }}
              >
                Like
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>No comments yet! Be the first one to comment</div>;
}
