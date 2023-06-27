import "../globals.css";
import { Inter, Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Authentication page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${rubik.className}  text-white`}>
        <nav className='fixed'>Navbar</nav>
        {children}
      </body>
    </html>
  );
}
