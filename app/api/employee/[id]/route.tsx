import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import {
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "@/lib/db/services/employee";
import { ParamsType } from "@/lib/types";
import { validateEmployeeData } from "@/lib/validate/employee";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const employee = await getEmployee({ id });
    return sendOkResponse(employee);
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
    const body = await request.json();
    const validated = validateEmployeeData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const data = await updateEmployee({ id }, validated.data);
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
    await updateEmployee({ id }, { enabled: false });
    return sendOkResponse({ success: true });
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
