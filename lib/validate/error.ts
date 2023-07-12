import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { handleErrorMessage } from "../response";

export function handleValidationError(zodError: ZodError) {
  return handleErrorMessage(fromZodError(zodError).toString());
}

export function throwValidationError(zodError: ZodError) {
  throw new Error(fromZodError(zodError).toString());
}
