import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      await prisma.follow.deleteMany({});

      res.status(200).json({ message: "Deleted follows successfully." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error deleting follows" });
    }
  } else {
    res.status(400).json({ message: "Invalid method" });
  }
}
