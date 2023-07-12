import { z } from "zod";

export const IdSchema = z.number().int().positive();

export function validateId(id: any) {
  return IdSchema.safeParse(id);
}
