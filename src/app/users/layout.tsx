import getUsers from "@/actions/getUsers";
import UserList from "./components/UserList";
import Sidebar from "../components/main/Sidebar";
import getCurrentUser from "@/actions/getCurrentUser";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
