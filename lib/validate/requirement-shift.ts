import { z } from "zod";

export const RequirementShiftDataSchema = z.object({
  // id: z.number().int().positive(),
  shiftId: z.number().int().positive(),
});

export const PartialRequirementShiftDataSchema =
  RequirementShiftDataSchema.partial();

export function validateRequirementShiftData(data: any) {
  return RequirementShiftDataSchema.safeParse(data);
}

export function validatePartialRequirementShiftData(data: any) {
  return PartialRequirementShiftDataSchema.safeParse(data);
}
