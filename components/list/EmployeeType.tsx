import { EmployeeType } from "@prisma/client";
import { Card, CardHeader, CardTitle } from "../ui/card";

export type EmployeeTypeListItemProps = {
  employeeType: EmployeeType;
};

export type EmployeeTypeListProps = {
  employeeTypes: EmployeeType[];
};

export function EmployeeTypeListItem({
  employeeType,
}: EmployeeTypeListItemProps) {
  return (
    <Card className="m-5">
      <CardHeader>
        <CardTitle>{employeeType.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default function EmployeeTypeList({
  employeeTypes,
}: EmployeeTypeListProps) {
  return employeeTypes.map((employeeType) => (
    <EmployeeTypeListItem employeeType={employeeType} key={employeeType.id} />
  ));
}
