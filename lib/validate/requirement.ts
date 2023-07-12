import { z } from "zod";

export const RequirementDataSchema = z.object({
  // employeeId: z.number().int().positive(),
  status: z.enum(["WANT", "AVOID"]),
  type: z.enum(["TEMPORARY", "GENERAL"]),
});

export const PartialRequirementDataSchema = RequirementDataSchema.partial();

export function validateRequirementData(data: any) {
  return RequirementDataSchema.safeParse(data);
}

export function validatePartialRequirementData(data: any) {
  return PartialRequirementDataSchema.safeParse(data);
}
