import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

export async function getConfigs() {
  return prisma.config.findMany();
}

export async function getConfig(where: Prisma.ConfigWhereUniqueInput) {
  return prisma.config.findUnique({
    where,
  });
}

export async function createConfig(data: Prisma.ConfigCreateInput) {
  return prisma.config.create({ data });
}

export async function updateConfig(
  where: Prisma.ConfigWhereUniqueInput,
  data: Prisma.ConfigUpdateInput
) {
  return prisma.config.update({
    where,
    data,
  });
}

export async function deleteConfig(where: Prisma.ConfigWhereUniqueInput) {
  return prisma.config.delete({
    where,
  });
}

export async function getFirstConfig() {
  return prisma.config.findFirst();
}
