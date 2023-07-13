import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import {
  deleteEmployeeType,
  getEmployeeType,
  updateEmployeeType,
} from "@/lib/db/services/employee-type";
import { ParamsType } from "@/lib/types";
import { validateEmployeeTypeData } from "@/lib/validate/employee-type";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const employeeTypes = await getEmployeeType({ id });
    return sendOkResponse(employeeTypes);
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
    const validated = validateEmployeeTypeData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const data = await updateEmployeeType({ id }, validated.data);
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
    await deleteEmployeeType({ id });
    return sendOkResponse({ success: true });
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
