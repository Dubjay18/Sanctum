import getUsers from "@/actions/getUsers";
import Sidebar from "../components/main/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";
import getSession from "@/actions/getSession";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  const session = await getSession();
  console.log(session, "sesssion");

  return (
    // @ts-expect-error Server Component
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
