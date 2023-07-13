import { EmployeeType } from "@prisma/client";
import Typography from "../typography";

export type EmployeeTypeSingleProps = {
  employeeType: EmployeeType;
};

export default function EmployeeTypeSingle({
  employeeType,
}: EmployeeTypeSingleProps) {
  return <Typography variant="h1">{employeeType.name}</Typography>;
}
