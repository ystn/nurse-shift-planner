import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import { getShift } from "@/lib/db/services/shift";
import { getShiftShift, getShiftShifts } from "@/lib/db/services/shift-shift";
import { ParamsType } from "@/lib/types";
import { CustomZodError, handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { validateShiftShiftData } from "@/lib/validate/shift-shift";
import { NextRequest } from "next/server";
import { fromZodError } from "zod-validation-error";
import {
  createMultipleShiftShifts,
  createShiftShift,
} from "@/lib/services/shift-shift";

export async function GET(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const shifts = await getShiftShifts({
      OR: [{ firstShiftId: id }, { secondShiftId: id }],
    });
    return sendOkResponse(shifts);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    let body = await request.json();
    let data;
    if (Array.isArray(body)) {
      data = await createMultipleShiftShifts(id, body);
    } else {
      data = await createShiftShift(id, body);
    }
    return sendOkResponse(data);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
