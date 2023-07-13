import { z } from "zod";

export const ShiftShiftDataSchema = z.object({
  firstShiftId: z.number().int().positive(),
  secondShiftId: z.number().int().positive(),
  delta: z.number(),
});

export const PartialShiftShiftDataSchema = ShiftShiftDataSchema.partial();

export function validateShiftShiftData(data: any) {
  return ShiftShiftDataSchema.safeParse(data);
}

export function validatePartialShiftShiftData(data: any) {
  return PartialShiftShiftDataSchema.safeParse(data);
}
