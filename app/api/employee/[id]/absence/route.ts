import {
  handleErrorMessage,
  sendCreatedResponse,
  sendOkResponse,
} from "@/lib/response";
import { createAbsence, getAbsences } from "@/lib/services/absence";
import { ParamsType } from "@/lib/types";
import { validateAbsenceData } from "@/lib/validate/absence";
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
    const absences = await getAbsences({ employeeId: id });
    return sendOkResponse(absences);
  } catch (e: any) {
    return handleErrorMessage(e);
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
    const body = await request.json();
    const validated = validateAbsenceData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const absence = await createAbsence({
      ...validated.data,
      employee: { connect: { id } },
    });
    return sendCreatedResponse(absence);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
