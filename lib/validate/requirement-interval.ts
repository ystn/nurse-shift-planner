import { z } from "zod";

export const RequirementIntervalDataSchema = z.object({
  // id: z.number().int().positive(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

export const PartialRequirementIntervalDataSchema =
  RequirementIntervalDataSchema.partial();

export function validateRequirementIntervalData(data: any) {
  return RequirementIntervalDataSchema.safeParse(data);
}

export function validatePartialRequirementIntervalData(data: any) {
  return PartialRequirementIntervalDataSchema.safeParse(data);
}
