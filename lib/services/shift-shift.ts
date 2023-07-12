import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getShiftShifts() {
  return prisma.shiftShift.findMany();
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
