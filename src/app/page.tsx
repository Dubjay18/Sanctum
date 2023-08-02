import React from "react";

import AuthCard from "./components/AuthCard";
import getCurrentUser from "@/actions/getCurrentUser";

function Auth() {
  return (
    <div className='min-h-[100vh] overflow-x-hidden relative bg-background z-10 flex items-center justify-center'>
      <AuthCard />
    </div>
  );
}

export default Auth;
