import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getRequirementIntervals() {
  return prisma.requirementInterval.findMany();
}

export async function getRequirementInterval(
  where: Prisma.RequirementIntervalWhereUniqueInput
) {
  return prisma.requirementInterval.findUnique({
    where,
  });
}

export async function createRequirementInterval(
  data: Prisma.RequirementIntervalCreateInput
) {
  return prisma.requirementInterval.create({ data });
}

export async function updateRequirementInterval(
  where: Prisma.RequirementIntervalWhereUniqueInput,
  data: Prisma.RequirementIntervalUpdateInput
) {
  return prisma.requirementInterval.update({
    where,
    data,
  });
}

export async function deleteRequirementInterval(
  where: Prisma.RequirementIntervalWhereUniqueInput
) {
  return prisma.requirementInterval.delete({
    where,
  });
}
