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
    <div className='min-h-screen'>
      <div className='min-h-screen'>{children}</div>
    </div>
  );
}
