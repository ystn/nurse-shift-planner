import { z } from "zod";
import * as Yup from "yup";

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

export const EmployeeTypeDataYupSchema = Yup.object({});
