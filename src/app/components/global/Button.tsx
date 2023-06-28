import React from "react";
import clsx from "clsx";
interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  theme?: "primary" | "secondary";
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
  type,
  style,
  onClick,
}: IButtonProps) {
  const buttonTheme = clsx({
    [classes.btnPrimary]: theme == "primary",
    [classes.btnSecondary]: theme == "secondary",
  });
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      className={`${className} ${
        block ? "w-full" : ""
      } ${buttonTheme} text-white py-4 px-7 rounded-lg hover:opacity-60 `}>
      {children}
    </button>
  );
}

export default Button;
