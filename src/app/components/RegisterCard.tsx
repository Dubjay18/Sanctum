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
import { notify } from "@/lib/toastify";

function RegisterCard() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const SignupFunc = () => {
    if (!email || !password || !username)
      return alert("Please fill all the fields");
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
        notify("Account Created", "success");
        router.push("/auth");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        notify(err?.response?.data?.message, "error");
      });
  };
  return (
    <div className='rounded-2xl bg-white shadow text-black min-h-[50vh] md:min-w-[400px] py-5 px-5 md:px-10'>
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
        type='submit'
      />

      <p className='flex items-center justify-center gap-5 my-7'>
        Have account?
        <span className='text-primary cursor-pointer hover:underline transition-all duration-200'>
          {" "}
          <Link href='/auth'>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default RegisterCard;
