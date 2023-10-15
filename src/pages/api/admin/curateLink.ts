import getSourceFromLink from "@/lib/getSourceFromLink";
import {
  getYouTubeBaseUrl,
  getFacebookBaseUrl,
  getInstagramBaseUrl,
  getTwitterXBaseUrl,
} from "@/lib/getBaseUrl";

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { link } = req.body;
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid method" });
  }
}
