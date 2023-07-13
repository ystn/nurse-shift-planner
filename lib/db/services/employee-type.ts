import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

export async function getEmployeeTypes() {
  return prisma.employeeType.findMany();
}

export async function getEmployeeType(
  where: Prisma.EmployeeTypeWhereUniqueInput
) {
  return prisma.employeeType.findUnique({
    where,
  });
}

export async function createEmployeeType(data: Prisma.EmployeeTypeCreateInput) {
  return prisma.employeeType.create({ data });
}

export async function updateEmployeeType(
  where: Prisma.EmployeeTypeWhereUniqueInput,
  data: Prisma.EmployeeTypeUpdateInput
) {
  return prisma.employeeType.update({
    where,
    data,
  });
}

export async function deleteEmployeeType(
  where: Prisma.EmployeeTypeWhereUniqueInput
) {
  return prisma.employeeType.delete({
    where,
  });
}
