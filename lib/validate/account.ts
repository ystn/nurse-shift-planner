import { z } from "zod";

export const AccountDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export const PartialAccountDataSchema = AccountDataSchema.partial();

export function validateAccountData(data: any) {
  return AccountDataSchema.safeParse(data);
}

export function validatePartialAccountData(data: any) {
  return PartialAccountDataSchema.safeParse(data);
}
