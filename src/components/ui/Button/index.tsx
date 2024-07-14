import { ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "small" | "normal";
} & Omit<ComponentProps<"button">, "className">;

export const Button: FC<Props> = ({ children, size = "normal", ...props }) => {
  return (
    <button
      type="button"
      className={`${size === "small" ? "w-[120px]" : "w-[240px]"}`}
    >
      {children}
    </button>
  );
};
