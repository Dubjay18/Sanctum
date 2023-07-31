import getUsers from "@/actions/getUsers";
import Sidebar from "../components/main/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";
import { getSession } from "next-auth/react";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
const session = await getSession()
console.log(session);

  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList
          users={users}
          title='Messages'
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
