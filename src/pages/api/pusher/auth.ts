import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { pusherServer } from "@/lib/pusher";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(
      req,
      res,
      authOptions
    );

    if (!session?.user?.email) {
      return res
        .status(401)
        .json({
          error: "Unauthorized: No session or user email.",
        });
    }

    const { socket_id: socketId, channel_name: channel } =
      req.body;
    const data = {
      user_id: session.user.email,
    };

    const authResponse = pusherServer.authorizeChannel(
      socketId,
      channel,
      data
    );

    return res.json(authResponse);
  } catch (error) {
    console.error("Error in Pusher authentication:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error" });
  }
}
