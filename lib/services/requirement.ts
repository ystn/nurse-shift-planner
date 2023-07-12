import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export async function getRequirements(where: Prisma.RequirementWhereInput) {
  return prisma.requirement.findMany({ where });
}

export async function getRequirement(
  where: Prisma.RequirementWhereUniqueInput
) {
  return prisma.requirement.findUnique({
    where,
  });
}

export async function getRequirementOrThrow(
  where: Prisma.RequirementWhereUniqueInput
) {
  return prisma.requirement.findUniqueOrThrow({
    where,
  });
}

export async function createRequirement(data: Prisma.RequirementCreateInput) {
  return prisma.requirement.create({ data });
}

export async function updateRequirement(
  where: Prisma.RequirementWhereUniqueInput,
  data: Prisma.RequirementUpdateInput
) {
  return prisma.requirement.update({
    where,
    data,
  });
}

export async function deleteRequirement(
  where: Prisma.RequirementWhereUniqueInput
) {
  return prisma.requirement.delete({
    where,
  });
}
