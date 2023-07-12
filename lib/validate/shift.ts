import { z } from "zod";

export const ShiftDataSchema = z.object({
  start: z.coerce.date(),
  end: z.coerce.date(),
  breaktime: z.number().positive(),
  enabled: z.boolean().optional(),
});

export const PartialShiftDataSchema = ShiftDataSchema.partial();

export function validateShiftData(data: any) {
  return ShiftDataSchema.safeParse(data);
}

export function validatePartialShiftData(data: any) {
  return PartialShiftDataSchema.safeParse(data);
}
