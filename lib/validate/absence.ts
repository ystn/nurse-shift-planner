import { z } from "zod";

export const AbsenceDataSchema = z.object({
  // employeeId: z.number().int().positive(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  type: z.enum(["VACATION", "SICK", "TRAINING"]),
});

export const PartialAbsenceDataSchema = AbsenceDataSchema.partial();

export function validateAbsenceData(data: any) {
  return AbsenceDataSchema.safeParse(data);
}

export function validatePartialAbsenceData(data: any) {
  return PartialAbsenceDataSchema.safeParse(data);
}
