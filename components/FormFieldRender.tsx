import React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

export type FormFieldRenderProps = {
  label: string;
  description: string;
  children: React.ReactNode;
};

export default function FormFieldRender({
  label,
  description,
  children,
}: FormFieldRenderProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
