import React from "react";

import LoginSvg from "../../assets/login_svg.svg";
import AuthSvg from "../../assets/auth_svg2.svg";
import Image from "next/image";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import AuthCard from "../components/AuthCard";

function Auth() {
  return (
    <div className='min-h-[100vh] overflow-x-hidden relative bg-primary/60 z-10 flex items-center justify-center'>
      <AuthCard  />
    </div>
  );
}

export default Auth;

