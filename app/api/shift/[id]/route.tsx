import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import { createShift, getShift, updateShift } from "@/lib/db/services/shift";
import { ParamsType } from "@/lib/types";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { validateShiftData } from "@/lib/validate/shift";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const shift = await getShift({ id });
    return sendOkResponse(shift);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    let body = await request.json();
    const validation = validateShiftData(body);
    if (!validation.success) return handleValidationError(validation.error);
    const data = await updateShift({ id }, validation.data);
    return sendOkResponse(data);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    await updateShift({ id }, { enabled: false });
    return sendOkResponse({ success: true });
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
