"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "./global/Button";

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

export const RegisterButton = () => {
  return (
    <Link href='/register' style={{ marginRight: 10 }}>
      Register
    </Link>
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
