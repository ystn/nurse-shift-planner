import EmployeeTypeForm from "@/components/forms/EmployeeType";
import { EmployeeTypeSingleFormProps } from "../page";

export default function EmployeeTypeEditForm({
  params,
}: EmployeeTypeSingleFormProps) {
  const id = Number(params.id);
  return <EmployeeTypeForm employeeTypeId={id} />;
}
