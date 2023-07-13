import FormFieldRender from "./FormFieldRender";
import { FormField } from "./ui/form";

export type FormFieldFProps = {
  name: string;
  control: any;
  Render: ({ field }: { field: any }) => JSX.Element;
};

export default function FormFieldF({ name, control, Render }: FormFieldFProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => <Render field={field} />}
    />
  );
}
