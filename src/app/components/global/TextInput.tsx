import React from "react";

interface ITextInputProps {
  type: string;
  className?: string;
  placeholder?: string;
}

function TextInput({
  type = "text",
  className,
  placeholder,
}: ITextInputProps) {
  return (
    <div>
      <input
        className={`box-border  w-full bg-blackA5 shadow-gray-200 inline-flex h-[40px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 border-gray-200 ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
