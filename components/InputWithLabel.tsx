import { Input, InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export type InputWithLabelProps = {
  label: string;
} & InputProps &
  React.RefAttributes<HTMLInputElement>;

export function InputWithLabel({ label, ...props }: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
    </div>
  );
}
