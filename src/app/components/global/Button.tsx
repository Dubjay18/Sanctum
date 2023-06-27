import React from "react";
import clsx from "clsx";
interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  theme?: "primary" | "secondary";
  block?: boolean;
}
const classes = {
  btnPrimary: "bg-primary",
  btnSecondary: "bg-secondary",
};

function Button({
  className,
  children,
  block = false,
  theme = "primary",
}: IButtonProps) {
  const buttonTheme = clsx({
    [classes.btnPrimary]: theme == "primary", //always applies
    [classes.btnSecondary]: theme == "secondary", //only when isRanilNotPresident === true
  });
  return (
    <button
      className={`${className} ${
        block ? "w-full" : ""
      } ${buttonTheme} text-white py-4 px-7 rounded-lg hover:opacity-60 `}>
      {children}
    </button>
  );
}

export default Button;
