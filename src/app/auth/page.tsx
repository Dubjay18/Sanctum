import React from "react";
import LoginCard from "../components/LoginCard";
import LoginSvg from "../../assets/login_svg.svg";
import AuthSvg from "../../assets/auth_svg2.svg";
import Image from "next/image";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";

function Auth({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='min-h-[100vh] overflow-x-hidden relative bg-primary/60 z-10 flex items-center justify-center'>
      <LoginCard csrfToken={csrfToken} />
    </div>
  );
}

export default Auth;
export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
