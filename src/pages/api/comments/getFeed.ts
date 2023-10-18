// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/lib/prisma";
// import { z } from "zod";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const { userId, take, skip }: any = req.query;
//       const feed: any = [];
//       // console.log("baseURL received in getComment endpoint is...", baseURL);

//       //for all the users that userId is following
//       //get user followees
//       // Get comments using Prisma
//       // 1. Fetch the user's followees
//       // 1. Get the user's followees
//       const followees = await prisma.follow.findMany({
//         where: { followerId: userId },
//         select: {
//           followeeId: true,
//         },
//       });

//       const user = await prisma.user.findUnique({
//         where: { id: userId },
//         include: { followees: true },
//       });

//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }

//       // 2. Get the posts from the user's followees, including posts and their likes
//       for (const followee of user.followees) {
//         const followeePosts = await prisma.post.findMany({
//           where: { authorId: followee.username },
//           include: { likes: true },
//           take: take,
//           skip: skip,
//           orderBy: {
//             createdAt: "desc",
//           },
//         });
//         feed.push(...followeePosts);
//       }

//       // 3. Merge and sort the posts and likes by their `createdAt` timestamps
//       const mergedFeed = [...feed];
//       mergedFeed.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

//       // 4. Return the resulting feed in response
//       res.status(200).json({
//         feed: mergedFeed,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ message: "Error fetching comments" });
//     }
//   } else {
//     res.status(400).json({ message: "Invalid method" });
//   }
// }
