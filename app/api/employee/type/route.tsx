import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import {
  createEmployeeType,
  getEmployeeTypes,
} from "@/lib/services/employee-type";
import { validateEmployeeTypeData } from "@/lib/validate/employee-type";
import { handleValidationError } from "@/lib/validate/error";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const employeeTypes = await getEmployeeTypes();
    return sendOkResponse(employeeTypes);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateEmployeeTypeData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const data = await createEmployeeType(validated.data);
    return sendOkResponse(data);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
