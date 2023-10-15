import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { password } = req.body;
      if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: "Invalid password" });
      }
      await prisma.post.deleteMany({});

      res.status(200).json({ message: "Deleted posts successfully." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error deleting posts" });
    }
  } else {
    res.status(400).json({ message: "Invalid method" });
  }
}
