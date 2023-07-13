import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

export async function getRequirementShifts() {
  return prisma.requirementShift.findMany();
}

export async function getRequirementShift(
  where: Prisma.RequirementShiftWhereUniqueInput
) {
  return prisma.requirementShift.findUnique({
    where,
  });
}

export async function createRequirementShift(
  data: Prisma.RequirementShiftCreateInput
) {
  return prisma.requirementShift.create({ data });
}

export async function updateRequirementShift(
  where: Prisma.RequirementShiftWhereUniqueInput,
  data: Prisma.RequirementShiftUpdateInput
) {
  return prisma.requirementShift.update({
    where,
    data,
  });
}

export async function deleteRequirementShift(
  where: Prisma.RequirementShiftWhereUniqueInput
) {
  return prisma.requirementShift.delete({
    where,
  });
}
