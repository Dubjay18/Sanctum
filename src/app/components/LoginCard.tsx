import React from "react";
import TextInput from "./global/TextInput";

function LoginCard() {
  return (
    <div className='rounded-lg bg-white shadow-md text-black min-h-[50vh] min-w-[400px] p-5'>
      <h1 className='flex items-center justify-center font-bold  md:text-2xl text-lg'>
        LoginCard
      </h1>
      <div>
        <TextInput type='text' />
      </div>
    </div>
  );
}

export default LoginCard;
