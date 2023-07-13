import EmployeeTypeList from "@/components/list/EmployeeType";
import { getEmployeeTypes } from "@/lib/db/services/employee-type";

export default async function EmployeeTypePage() {
  const emplyeeTypes = await getEmployeeTypes();
  return <EmployeeTypeList employeeTypes={emplyeeTypes} />;
}
