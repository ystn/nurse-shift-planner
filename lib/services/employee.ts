import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getEmployees() {
  return prisma.employee.findMany();
}

export async function getEmployee(where: Prisma.EmployeeWhereUniqueInput) {
  return prisma.employee.findUnique({
    where,
  });
}

export async function createEmployee(data: Prisma.EmployeeCreateInput) {
  return prisma.employee.create({ data });
}

export async function updateEmployee(
  where: Prisma.EmployeeWhereUniqueInput,
  data: Prisma.EmployeeUpdateInput
) {
  return prisma.employee.update({
    where,
    data,
  });
}

export async function deleteEmployee(where: Prisma.EmployeeWhereUniqueInput) {
  return prisma.employee.delete({
    where,
  });
}
