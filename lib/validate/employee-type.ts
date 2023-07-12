import { z } from "zod";

export const EmployeeTypeDataSchema = z.object({
  name: z.string().min(2).max(100),
});

export const PartialEmployeeTypeDataSchema = EmployeeTypeDataSchema.partial();

export function validateEmployeeTypeData(data: any) {
  return EmployeeTypeDataSchema.safeParse(data);
}

export function validatePartialEmployeeTypeData(data: any) {
  return PartialEmployeeTypeDataSchema.safeParse(data);
}
