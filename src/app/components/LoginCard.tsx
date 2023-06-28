"use client";

import React from "react";
import TextInput from "./global/TextInput";
import Button from "./global/Button";
import { LoginButton } from "./AuthButtons";

import { useSession } from "next-auth/react";

function LoginCard() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className='rounded-2xl bg-white shadow text-black min-h-[50vh] min-w-[400px] py-5 px-10'>
      <h1 className='flex items-center justify-center font-bold  md:text-xl text-lg'>
        LoginCard
      </h1>
      <p className='text-center my-4 max-w-sm'>
        Hey, Enter your details to get signed into your
        account
      </p>
      <div className='my-6'>
        <TextInput
          type='email'
          placeholder='Email Address'
        />
      </div>
      <div className='my-6'>
        <TextInput type='password' placeholder='Password' />
      </div>
      <LoginButton />
      <p className='flex items-center justify-center gap-5 my-7'>
        - Or Sign with -
      </p>
      <p className='flex items-center justify-center gap-5 my-7'>
        Dont have account?
        <span className='text-primary'>Register now</span>
      </p>
    </div>
  );
}

export default LoginCard;
