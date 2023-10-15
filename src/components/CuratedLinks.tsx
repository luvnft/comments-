import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { curatedLinkState } from "@/store/atoms/curatedLinksState";
import axios from "axios";
import YouTube from "react-youtube";
import { contentState } from "@/store/atoms/contentState";

export default function CuratedLinks() {
  const curatedLinks = useRecoilValue(curatedLinkState);
  const setCuratedLinks = useSetRecoilState(curatedLinkState);
  const setContentState = useSetRecoilState(contentState);
  const content = useRecoilValue(contentState);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios({
          method: "GET",
          url: "api/getCurated",
          params: {
            take: 10,
            skip: 0,
          },
        });
        setCuratedLinks(() => ({
          isLoading: true,
          links: response.data.curatedLinks,
        }));

        console.log("response from curatedlinks...", response);
        console.log("Curated contentID");
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <span className="text-xl font-medium mb-2 pb-5">Featured</span>
      <div>
        {curatedLinks.links &&
          curatedLinks.links.map((data: any) => {
            return (
              <div className="flex justify-center">
                <div
                  key={data.id}
                  className="p-5 mb-5 bg-[#0e0e0e] flex justify-center"
                >
                  <div>
                    <YouTube className="" videoId={data.contentId || ""} />
                    <div className="p-2 m-2">
                      <button
                        className="bg-[#1b1430] rounded-xl p-3 hover:bg-[#35275e]"
                        onClick={async () => {
                          // id        String   @id @default(cuid())
                          // rootUrl   String
                          // contentId String?
                          // createdAt DateTime @default(now())

                          setContentState({
                            isLoading: true,
                            link: data.rootUrl,
                            source: "YouTube",
                            rootUrl: data.rootUrl,
                            contentId: data.contentId,
                            comments: null,
                          });
                          let baseURL = data.rootUrl;

                          try {
                            //get comments
                            let response: any = await axios({
                              method: "GET",
                              url: "api/comments/getComments",
                              params: { baseURL },
                            });
                            console.log("comments fetched.....", response);
                            setContentState((prevVideoState) => ({
                              ...prevVideoState,
                              comments: response.data.comments,
                            }));
                          } catch (e) {
                            alert("Error fetching comments");
                          }
                        }}
                      >
                        Click here to comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
