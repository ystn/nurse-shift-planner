import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import { createShift, getShifts } from "@/lib/services/shift";
import { createMultipleShiftEmployeeTypes } from "@/lib/services/shift-employee-type";
import { handleValidationError } from "@/lib/validate/error";
import { validateShiftEmployeeTypeData } from "@/lib/validate/shfit-employee-type";
import { validateShiftData } from "@/lib/validate/shift";
import { NextRequest } from "next/server";
import { fromZodError } from "zod-validation-error";

export async function GET(request: NextRequest) {
  try {
    const shifts = await getShifts();
    return sendOkResponse(shifts);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    let body = await request.json();
    const validation = validateShiftData(body);
    if (!validation.success) return handleValidationError(validation.error);
    const data = await createShift(validation.data);
    createMultipleShiftEmployeeTypes(data.id, body.employeeTypes);

    return sendOkResponse(data);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
