import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import { createEmployee, getEmployees } from "@/lib/db/services/employee";
import { validateEmployeeData } from "@/lib/validate/employee";
import { handleValidationError } from "@/lib/validate/error";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const employees = await getEmployees();
    return sendOkResponse(employees);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateEmployeeData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const data = await createEmployee(body);
    return sendOkResponse(data);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
