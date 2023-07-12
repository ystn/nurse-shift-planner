import { z } from "zod";

export const ConfigDataSchema = z.object({
  patientNumber: z.number().int().positive(),
  bedsNumber: z.number().int().positive(),
  maxHours: z.number().positive(),
});

export const PartialConfigDataSchema = ConfigDataSchema.partial();

export function validateConfigData(data: any) {
  return ConfigDataSchema.safeParse(data);
}

export function validatePartialConfigData(data: any) {
  return PartialConfigDataSchema.safeParse(data);
}
