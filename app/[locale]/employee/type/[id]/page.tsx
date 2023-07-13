import EmployeeTypeSingle from "@/components/single/EmployeeType";
import { getEmployeeType } from "@/lib/db/services/employee-type";
import { notFound } from "next/navigation";

export type EmployeeTypeSingleFormProps = {
  params: {
    id: string;
  };
};

export default async function EmployeeTypeSinglePage({
  params,
}: EmployeeTypeSingleFormProps) {
  const employeeType = await getEmployeeType({ id: Number(params.id) });
  if (employeeType === null) notFound();
  return <EmployeeTypeSingle employeeType={employeeType} />;
}
