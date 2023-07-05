import getCurrentUser from "@/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = getCurrentUser();
  const currentUser = {
    name: "jay",
  };
  return (
    <div className='h-full bg-black'>
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}

export default Sidebar;
