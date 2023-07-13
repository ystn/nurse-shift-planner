import { z } from "zod";
import * as Yup from "yup";
export const ShiftDataSchema = z.object({
  name: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  breaktime: z.number().nonnegative(),
  enabled: z.boolean().optional(),
});

export const PartialShiftDataSchema = ShiftDataSchema.partial();

export function validateShiftData(data: any) {
  return ShiftDataSchema.safeParse(data);
}

export function validatePartialShiftData(data: any) {
  return PartialShiftDataSchema.safeParse(data);
}

export const ShiftDataYupSchema = {
  name: Yup.string().required(),
  start: Yup.date().required(),
  end: Yup.date().required(),
  breaktime: Yup.number().positive().required(),
  enabled: Yup.boolean().optional(),
};
