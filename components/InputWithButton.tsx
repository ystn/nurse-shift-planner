import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import React from "react";

export type InputWithButtonProps = {
  label: string;
  buttonType: "button" | "submit" | "reset" | undefined;
} & InputProps &
  React.RefAttributes<HTMLInputElement>;

export function InputWithButton({
  label,
  buttonType,
  ...props
}: InputWithButtonProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...props} />
      <Button type={buttonType}>{label}</Button>
    </div>
  );
}
