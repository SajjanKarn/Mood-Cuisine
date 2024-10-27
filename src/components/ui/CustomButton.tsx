"use client";

type CustomButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  link?: string;
};

const CustomButton = ({ children, onClick = () => {} }: CustomButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = ({ children, onClick = () => {} }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-customSecondary font-space font-bold px-5 py-2 rounded-lg border-[2px] border-black button-shadow"
    >
      {children}
    </button>
  );
};

export default CustomButton;
