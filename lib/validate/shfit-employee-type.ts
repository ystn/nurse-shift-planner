import { z } from "zod";

export const ShiftEmployeeTypeDataSchema = z.object({
  shiftId: z.number().int().positive(),
  employeeTypeId: z.number().int().positive(),
  capacity: z.number().int().nonnegative(),
  canBePresent: z.boolean(),
  requiredNumber: z.number().int().nonnegative(),
});

export const PartialShiftEmployeeTypeDataSchema =
  ShiftEmployeeTypeDataSchema.partial();

export function validateShiftEmployeeTypeData(data: any) {
  return ShiftEmployeeTypeDataSchema.safeParse(data);
}

export function validatePartialShiftEmployeeTypeData(data: any) {
  return PartialShiftEmployeeTypeDataSchema.safeParse(data);
}
