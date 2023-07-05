import User from "@/models/user";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email as string
    //   }
    // });
    const currentUser = User.findOne({
      email: session.user.email,
    });
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
