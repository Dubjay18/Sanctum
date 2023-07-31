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
console.log(conversations);


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
