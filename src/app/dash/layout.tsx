import Sidebar from "../components/main/Sidebar";

export const metadata = {
  title: "Sanctum",
  description: "A community for peaceful conversations",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div className='bg-black'>
        <div className=''>{children}</div>
      </div>
    </Sidebar>
  );
}
