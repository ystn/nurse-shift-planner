import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getShifts() {
  return prisma.shift.findMany();
}

export async function getShift(where: Prisma.ShiftWhereUniqueInput) {
  return prisma.shift.findUnique({
    where,
  });
}

export async function createShift(data: Prisma.ShiftCreateInput) {
  return prisma.shift.create({ data });
}

export async function updateShift(
  where: Prisma.ShiftWhereUniqueInput,
  data: Prisma.ShiftUpdateInput
) {
  return prisma.shift.update({
    where,
    data,
  });
}

export async function deleteShift(where: Prisma.ShiftWhereUniqueInput) {
  return prisma.shift.delete({
    where,
  });
}
