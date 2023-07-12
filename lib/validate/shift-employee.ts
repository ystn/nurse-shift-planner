import { z } from "zod";

export const ShiftEmployeeDataSchema = z.object({
  shiftId: z.number().int().positive(),
  employeeId: z.number().int().positive(),
  date: z.coerce.date(),
  isConfirmed: z.boolean().optional(),
});

export const PartialShiftEmployeeDataSchema = ShiftEmployeeDataSchema.partial();

export function validateShiftEmployeeData(data: any) {
  return ShiftEmployeeDataSchema.safeParse(data);
}

export function validatePartialShiftEmployeeData(data: any) {
  return PartialShiftEmployeeDataSchema.safeParse(data);
}
