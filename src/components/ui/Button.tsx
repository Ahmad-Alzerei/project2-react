import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  // console.log({ rest });
  return (
    <button
      className={`${className} ${width} p-2 w-full rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
