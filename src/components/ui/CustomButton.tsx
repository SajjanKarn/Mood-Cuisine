"use client";

import Link from "next/link";

type CustomButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  link?: string;
  variant?: "primary" | "secondary";
  // add ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

const CustomButton = ({
  children,
  onClick = () => {},
  variant = "primary",
  link,
  ...props
}: CustomButtonProps) => {
  return link ? (
    <Link href={link}>
      <Button variant={variant}>{children}</Button>
    </Link>
  ) : (
    <Button onClick={onClick} variant={variant} {...props}>
      {children}
    </Button>
  );
};

const Button = ({
  children,
  onClick = () => {},
  variant,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? "bg-customSecondary" : "bg-customTertiary"
      } font-space font-bold px-5 py-2 rounded-lg border-[2px] border-black button-shadow`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
