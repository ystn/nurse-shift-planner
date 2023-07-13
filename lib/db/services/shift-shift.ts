import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";
import { validateShiftShiftData } from "../../validate/shift-shift";
import { fromZodError } from "zod-validation-error";
import { CustomZodError } from "../../validate/error";

export async function getShiftShifts(where: Prisma.ShiftShiftWhereInput = {}) {
  return prisma.shiftShift.findMany({ where });
}

export async function getShiftShift(where: Prisma.ShiftShiftWhereUniqueInput) {
  return prisma.shiftShift.findUnique({
    where,
  });
}

export async function createShiftShift(data: Prisma.ShiftShiftCreateInput) {
  return prisma.shiftShift.create({ data });
}

export async function updateShiftShift(
  where: Prisma.ShiftShiftWhereUniqueInput,
  data: Prisma.ShiftShiftUpdateInput
) {
  return prisma.shiftShift.update({
    where,
    data,
  });
}

export async function deleteShiftShift(
  where: Prisma.ShiftShiftWhereUniqueInput
) {
  return prisma.shiftShift.delete({
    where,
  });
}

export async function createMultipleShiftShifts(
  data: Prisma.ShiftShiftCreateManyInput[]
) {
  return prisma.shiftShift.createMany({ data });
}
