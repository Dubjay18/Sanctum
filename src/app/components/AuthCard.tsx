"use client";

import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import TextInput from "./global/TextInput";
import Button from "./global/Button";
import { LoginButton } from "./AuthButtons";

import {
  getCsrfToken,
  signIn,
  useSession,
} from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Input from "./inputs/Input";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";
function AuthCard() {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/conversations");
    }
  }, [session?.status, router]);
  useEffect(() => {
    console.log(session);
  }, [session]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() =>
          signIn("credentials", {
            ...data,
            redirect: false,
          })
        )
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          } else {
            if (callback?.ok) {
              toast.success("Logging in");
              // router.push("/conversations");
              console.log(callback);
            }
          }
        })
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          } else {
            if (callback?.ok) {
              // router.push("/conversations");
              toast.success("Logging in");

              router.push("/conversations");
            }
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials!");
        } else {
          if (callback?.ok) {
            toast.success("Logging in");
            router.push("/conversations");
          }
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='rounded-2xl bg-card-foreground text-white shadow  min-h-[50vh] md:min-w-[400px] py-5 px-5 md:px-10'>
      <h1 className='flex items-center justify-center font-bold  md:text-xl text-lg underline'>
        Sanctum
      </h1>
      <p className='text-center my-4 max-w-sm'>
        Hey, Enter your details to get signed into your
        account
      </p>
      <div className='my-6'>
        {variant === "REGISTER" && (
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id='name'
            label='Name'
          />
        )}
      </div>
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        id='email'
        label='Email address'
        type='email'
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        id='password'
        label='Password'
        type='password'
      />
      <div>
        <Button
          disabled={isLoading}
          type='submit'
          className='w-full my-5 '>
          {variant === "LOGIN" ? "Sign in" : "Register"}
        </Button>
      </div>

      <p className='flex items-center justify-center gap-5 my-7'>
        - Or Sign with -
      </p>
      <div className='mt-6 flex gap-2'>
        <AuthSocialButton
          icon={BsGithub}
          onClick={() => socialAction("github")}
        />
        <AuthSocialButton
          icon={BsGoogle}
          onClick={() => socialAction("google")}
        />
      </div>
      <div
        className='
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          '>
        <div>
          {variant === "LOGIN"
            ? "New to Messenger?"
            : "Already have an account?"}
        </div>
        <div
          onClick={toggleVariant}
          className='underline cursor-pointer'>
          {variant === "LOGIN"
            ? "Create an account"
            : "Login"}
        </div>
      </div>
      {/* <p className='flex items-center justify-center gap-5 my-7'>
        Dont have account?
        <span className='text-primary cursor-pointer hover:underline duration-200 transition-all'>
          <Link href='/auth/register'>Register now</Link>
        </span>
      </p> */}
    </form>
  );
}

export default AuthCard;
