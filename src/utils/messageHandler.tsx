import { Server, Socket } from "socket.io";

const messageHandler = (
  io: Server,
  socket: Socket
): void => {
  const createdMessage = (msg: string): void => {
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);
};

export default messageHandler;
