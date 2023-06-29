"use client";

import React from "react";
import TextInput from "./global/TextInput";
import Button from "./global/Button";
import { LoginButton } from "./AuthButtons";

import { getCsrfToken, useSession } from "next-auth/react";
import Link from "next/link";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSideProps } from "../auth/page";

function LoginCard({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  console.log(session);

  return (
    <form
      method='post'
      action='/api/auth/signin'
      className='rounded-2xl bg-white shadow text-black min-h-[50vh] md:min-w-[400px] py-5 px-5 md:px-10'>
      <h1 className='flex items-center justify-center font-bold  md:text-xl text-lg'>
        LoginCard
      </h1>
      <p className='text-center my-4 max-w-sm'>
        Hey, Enter your details to get signed into your
        account
      </p>
      <input
        name='csrfToken'
        type='hidden'
        defaultValue={csrfToken}
      />
      <div className='my-6'>
        <TextInput
          type='email'
          placeholder='Email Address'
          id='email'
          name='email'
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
        <span className='text-primary cursor-pointer hover:underline duration-200 transition-all'>
          <Link href='/auth/register'>Register now</Link>
        </span>
      </p>
    </form>
  );
}

export default LoginCard;
