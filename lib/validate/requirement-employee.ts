import { z } from "zod";

export const RequirementEmployeeDataSchema = z.object({
  // id: z.number().int().positive(),
  employeeId: z.number().int().positive(),
});

export const PartialRequirementEmployeeDataSchema =
  RequirementEmployeeDataSchema.partial();

export function validateRequirementEmployeeData(data: any) {
  return RequirementEmployeeDataSchema.safeParse(data);
}

export function validatePartialRequirementEmployeeData(data: any) {
  return PartialRequirementEmployeeDataSchema.safeParse(data);
}
