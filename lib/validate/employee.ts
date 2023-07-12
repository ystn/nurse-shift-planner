import { z } from "zod";

export const EmployeeDataSchema = z.object({
  name: z.string().min(2).max(100),
  participation: z.number().positive().max(100),
  employeeTypeId: z.number().int().positive(),
  enabled: z.boolean().optional(),
});

export const PartialEmployeeDataSchema = EmployeeDataSchema.partial();

export function validateEmployeeData(data: any) {
  return EmployeeDataSchema.safeParse(data);
}

export function validatePartialEmployeeData(data: any) {
  return PartialEmployeeDataSchema.safeParse(data);
}
