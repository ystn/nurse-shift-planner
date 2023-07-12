import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getAbsences(where: Prisma.AbsenceWhereInput) {
  return prisma.absence.findMany({ where });
}

export async function getAbsence(where: Prisma.AbsenceWhereUniqueInput) {
  return prisma.absence.findUnique({
    where,
  });
}

export async function getAbsenceOrThrow(where: Prisma.AbsenceWhereUniqueInput) {
  return prisma.absence.findUniqueOrThrow({
    where,
  });
}

export async function createAbsence(data: Prisma.AbsenceCreateInput) {
  return prisma.absence.create({ data });
}

export async function updateAbsence(
  where: Prisma.AbsenceWhereUniqueInput,
  data: Prisma.AbsenceUpdateInput
) {
  return prisma.absence.update({
    where,
    data,
  });
}

export async function deleteAbsence(where: Prisma.AbsenceWhereUniqueInput) {
  return prisma.absence.delete({
    where,
  });
}
