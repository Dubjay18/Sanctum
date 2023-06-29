"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "./global/Button";
import axios from "axios";
import { IUser } from "@/types";
import React, { useState } from "react";

export const LoginButton = () => {
  return (
    <Button
      style={{ marginRight: 10 }}
      block
      type='button'
      onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

export const RegisterButton = ({
  onClick,
  loading,
}: any) => {
  return (
    <Button
      style={{ marginRight: 10 }}
      block
      type='button'
      onClick={onClick}
      loading={loading}>
      SignUp
    </Button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href='/profile'>Profile</Link>;
};
