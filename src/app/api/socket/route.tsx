import messageHandler from "@/utils/messageHandler";
import type { NextApiRequest, NextApiResponse } from "next";
import { Server, Socket } from "socket.io";

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): void {
  // It means that socket server was already initialised
  if ((res.socket as any)?.server?.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server((res.socket as any).server);
  (res.socket as any).server.io = io;

  const onConnection = (socket: Socket): void => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
