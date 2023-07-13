import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

export async function getAccounts() {
  return prisma.account.findMany();
}

export async function getAccount(where: Prisma.AccountWhereUniqueInput) {
  return prisma.account.findUnique({
    where,
  });
}

export async function createAccount(data: Prisma.AccountCreateInput) {
  return prisma.account.create({ data });
}

export async function updateAccount(
  where: Prisma.AccountWhereUniqueInput,
  data: Prisma.AccountUpdateInput
) {
  return prisma.account.update({
    where,
    data,
  });
}

export async function deleteAccount(where: Prisma.AccountWhereUniqueInput) {
  return prisma.account.delete({
    where,
  });
}
