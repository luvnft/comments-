import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { userId, commentId } = req.body;

      //check if like exists first
      const existingLike = await prisma.like.findFirst({
        where: {
          authorId: userId,
          postId: commentId,
        },
      });

      if (existingLike) {
        res.status(400).json({ message: "The like already exists." });
      } else {
        const newLike = await prisma.like.create({
          data: {
            authorId: userId,
            postId: commentId,
          },
        });

        // Associate the new like with the user
        await prisma.user.update({
          where: { id: userId },
          data: {
            likes: {
              connect: {
                id: newLike.id,
              },
            },
          },
        });

        // Associate the new like with the post
        await prisma.post.update({
          where: { id: commentId },
          data: {
            likes: {
              connect: {
                id: newLike.id,
              },
            },
          },
        });
        res.status(200).json({ message: "Like created successfully." });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error liking comment" });
    }
  } else {
    res.status(400).json({ message: "Invalid method" });
  }
}
