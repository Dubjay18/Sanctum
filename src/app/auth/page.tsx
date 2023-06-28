import React from "react";
import LoginCard from "../components/LoginCard";
import LoginSvg from "../../assets/login_svg.svg";
import AuthSvg from "../../assets/auth_svg2.svg";
import Image from "next/image";

function Auth() {
  return (
    <div className='min-h-[100vh] relative bg-primary/60 z-10 flex items-center justify-center'>
      <LoginCard />
    </div>
  );
}

export default Auth;
