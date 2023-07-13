import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";
import { validateShiftEmployeeTypeData } from "../../validate/shfit-employee-type";
import { fromZodError } from "zod-validation-error";

export async function getShiftEmployeeTypes() {
  return prisma.shiftEmployeeType.findMany();
}

export async function getShiftEmployeeType(
  where: Prisma.ShiftEmployeeTypeWhereUniqueInput
) {
  return prisma.shiftEmployeeType.findUnique({
    where,
  });
}

export async function createShiftEmployeeType(
  data: Prisma.ShiftEmployeeTypeCreateInput
) {
  return prisma.shiftEmployeeType.create({ data });
}

export async function updateShiftEmployeeType(
  where: Prisma.ShiftEmployeeTypeWhereUniqueInput,
  data: Prisma.ShiftEmployeeTypeUpdateInput
) {
  return prisma.shiftEmployeeType.update({
    where,
    data,
  });
}

export async function deleteShiftEmployeeType(
  where: Prisma.ShiftEmployeeTypeWhereUniqueInput
) {
  return prisma.shiftEmployeeType.delete({
    where,
  });
}

export async function createMultipleShiftEmployeeTypes(
  data: Prisma.ShiftEmployeeTypeCreateManyInput[]
) {
  return prisma.shiftEmployeeType.createMany({ data });
}
