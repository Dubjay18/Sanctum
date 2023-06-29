"use client";

import React from "react";
import TextInput from "./global/TextInput";
import Button from "./global/Button";
import { LoginButton, RegisterButton } from "./AuthButtons";

import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

import { useState } from "react";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";

function RegisterCard() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  console.log(session);
  const [loading, setLoading] = useState(false);
  const SignupFunc = () => {
    setLoading(true);
    axios
      .post("http://localhost:3000/api/register", {
        email,
        password,
        username,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        router.push("/auth");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className='rounded-2xl bg-white shadow text-black min-h-[50vh] min-w-[400px] z-30 py-5 px-10'>
      <h1 className='flex items-center justify-center font-bold  md:text-xl text-lg'>
        RegisterCard
      </h1>
      <p className='text-center my-4 max-w-sm'>
        Hey, Enter your details to register an account
      </p>
      <div className='my-6'>
        <TextInput
          type='text'
          placeholder='Username'
          onChange={(e: any) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className='my-6'>
        <TextInput
          type='email'
          placeholder='Email Address'
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='my-6'>
        <TextInput
          type='password'
          placeholder='Password'
          onChange={(e: any) => setPasword(e.target.value)}
          value={password}
        />
      </div>
      <RegisterButton
        loading={loading}
        onClick={SignupFunc}
      />

      <p className='flex items-center justify-center gap-5 my-7'>
        Have account?
        <span className='text-primary'>
          {" "}
          <Link href='/auth'>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default RegisterCard;
