import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (
  conversationId: string
) => {
  console.log(conversationId,"ci");
  
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }
if(conversationId){

    const conversation =
      await prisma.conversation.findUnique({
        where: {
          id: conversationId,
        },
        include: {
          users: true,
        },
      });

    return conversation;
}
  } catch (error: any) {
    console.log(error, "SERVER_ERROR");
    return null;
  }
};

export default getConversationById;
