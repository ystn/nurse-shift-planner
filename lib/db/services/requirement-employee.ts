import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

export async function getRequirementEmployees() {
  return prisma.requirementEmployee.findMany();
}

export async function getRequirementEmployee(
  where: Prisma.RequirementEmployeeWhereUniqueInput
) {
  return prisma.requirementEmployee.findUnique({
    where,
  });
}

export async function createRequirementEmployee(
  data: Prisma.RequirementEmployeeCreateInput
) {
  return prisma.requirementEmployee.create({ data });
}

export async function updateRequirementEmployee(
  where: Prisma.RequirementEmployeeWhereUniqueInput,
  data: Prisma.RequirementEmployeeUpdateInput
) {
  return prisma.requirementEmployee.update({
    where,
    data,
  });
}

export async function deleteRequirementEmployee(
  where: Prisma.RequirementEmployeeWhereUniqueInput
) {
  return prisma.requirementEmployee.delete({
    where,
  });
}
