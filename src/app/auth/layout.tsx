import "../globals.css";
import { Inter, Rubik } from "next/font/google";
import LoginSvg from "../../assets/login_svg.svg";
import AuthSvg from "../../assets/auth_svg2.svg";
import Image from "next/image";

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
      <body
        className={`${rubik.className} relative text-white overflow-x-hidden`}>
        <nav className='fixed z-20 '>
          <div className='p-5'>
            <h1 className=' text-black font-bold text-xl'>
              {" "}
              Sanctum
            </h1>
            <hr className='text-black border-black ' />
          </div>
        </nav>
        <Image
          src={LoginSvg}
          alt='login_svg'
          className='absolute max-w-[300px] left-10 top-72 z-20'
        />
        <Image
          src={AuthSvg}
          alt='auth_svg'
          className='absolute max-w-[300px] right-10 top-72 z-20'
        />
        {children}
      </body>
    </html>
  );
}
