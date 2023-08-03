import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiChat } from "react-icons/hi";
import {
  HiArrowLeftOnRectangle,
  HiUsers,
} from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { toast } from "react-hot-toast";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const router = useRouter();
  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active:
          pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        onClick: () => {
          toast.success("signing out");
          signOut().then(() => {
            toast.success("Logout successfully");
          });
          router.push("/");
        },
        href: "#",
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId, router]
  );

  return routes;
};

export default useRoutes;
