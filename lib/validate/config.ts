import { z } from "zod";
import * as Yup from "yup";

export const ConfigDataSchema = z.object({
  patientNumber: z.number().int().nonnegative(),
  bedsNumber: z.number().int().nonnegative(),
  maxHours: z.number().nonnegative(),
});

export const PartialConfigDataSchema = ConfigDataSchema.partial();

export function validateConfigData(data: any) {
  return ConfigDataSchema.safeParse(data);
}

export function validatePartialConfigData(data: any) {
  return PartialConfigDataSchema.safeParse(data);
}

export const ConfigDataYupSchema = Yup.object({
  patientNumber: Yup.number().integer().positive().required(),
  bedsNumber: Yup.number().integer().positive().required(),
  maxHours: Yup.number().positive().required(),
});
