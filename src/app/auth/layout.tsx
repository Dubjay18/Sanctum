"use client";
import "../globals.css";
import { Inter, Rubik } from "next/font/google";
import LoginSvg from "../../assets/login_svg.svg";
import FunArrowSvg from "../../assets/fun_arrow.svg";
import Exclamation from "../../assets/exclamation.svg";
import CommanLineSvg from "../../assets/command_line.svg";
import codeSvg from "../../assets/code.svg";

import AuthSvg from "../../assets/auth_svg2.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      router.push("/main");
    }
  }, [session, router]);
  return (
    <div>
      <div
        className={`${rubik.className} relative text-white overflow-x-hidden`}>
        <div className='fixed z-20 '>
          <div className='p-5'>
            <h1 className=' text-black font-bold text-xl'>
              {" "}
              Sanctum
            </h1>
            <hr className='text-black border-black ' />
          </div>
        </div>
        <div>
          <Image
            src={LoginSvg}
            alt='login_svg'
            className='absolute lg:block hidden xl:max-w-[300px] max-w-[200px] xl:left-10 left-5 xl:top-72 top-96 z-20'
          />
          <Image
            src={FunArrowSvg}
            alt='funArrow_svg'
            className='absolute max-w-[300px] left-5 top-20 z-20'
          />
          <Image
            src={FunArrowSvg}
            alt='funArrow_svg'
            className='absolute max-w-[300px] md:block hidden xl:left-80 rotate-180 top-64 z-20'
          />

          <Image
            src={CommanLineSvg}
            alt='commandline_svg'
            className='absolute max-w-[300px] right-48 top-28 z-20'
          />
          <Image
            src={AuthSvg}
            alt='auth_svg'
            className='absolute lg:block hidden xl:max-w-[300px] max-w-[200px] right-10 xl:top-72 top-56 z-20'
          />
        </div>
        {children}
      </div>
    </div>
  );
}
