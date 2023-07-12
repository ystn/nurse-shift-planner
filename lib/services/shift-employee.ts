import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getShiftEmployees() {
  return prisma.shiftEmployee.findMany();
}

export async function getShiftEmployee(
  where: Prisma.ShiftEmployeeWhereUniqueInput
) {
  return prisma.shiftEmployee.findUnique({
    where,
  });
}

export async function createShiftEmployee(
  data: Prisma.ShiftEmployeeCreateInput
) {
  return prisma.shiftEmployee.create({ data });
}

export async function updateShiftEmployee(
  where: Prisma.ShiftEmployeeWhereUniqueInput,
  data: Prisma.ShiftEmployeeUpdateInput
) {
  return prisma.shiftEmployee.update({
    where,
    data,
  });
}

export async function deleteShiftEmployee(
  where: Prisma.ShiftEmployeeWhereUniqueInput
) {
  return prisma.shiftEmployee.delete({
    where,
  });
}
