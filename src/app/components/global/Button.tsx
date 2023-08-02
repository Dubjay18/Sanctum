import React from "react";
import clsx from "clsx";
import Loader from "./Loader";
interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  theme?: "primary" | "secondary" | "fprimary";
  block?: boolean;
  onClick?:
    | ((
        event: React.MouseEvent<
          HTMLButtonElement,
          MouseEvent
        >
      ) => void)
    | undefined;
  style?: object;
  type?: "submit" | "button";
  loading?: boolean;
  disabled?: boolean;
}
const classes = {
  btnPrimary: "bg-primary",
  btnFprimary: "bg-primary-foreground !text-black",
  btnSecondary: "bg-secondary !text-black",
};

function Button({
  className,
  children,
  block = false,
  theme = "primary",
  type,
  style,
  loading,
  onClick,
  disabled,
}: IButtonProps) {
  const buttonTheme = clsx({
    [classes.btnPrimary]: theme == "primary",
    [classes.btnFprimary]: theme == "fprimary",
    [classes.btnSecondary]: theme == "secondary",
  });
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${className} ${
        block ? "w-full" : ""
      } ${buttonTheme} text-white py-4 px-7 disabled:opacity-50 rounded-lg hover:opacity-60 `}>
      {loading ? <Loader /> : children}
    </button>
  );
}

export default Button;
