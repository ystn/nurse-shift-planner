import FormFieldRender from "./FormFieldRender";
import { FormField } from "./ui/form";

export type FormFieldCProps = {
  name: string;
  control: any;
  label: string;
  description: string;
  Render: ({ field }: { field: any }) => JSX.Element;
};

export default function FormFieldC({
  name,
  control,
  Render,
  label,
  description,
}: FormFieldCProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormFieldRender label={label} description={description}>
          <Render field={field} />
        </FormFieldRender>
      )}
    />
  );
}
