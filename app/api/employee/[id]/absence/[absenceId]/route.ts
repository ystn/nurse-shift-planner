import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import {
  deleteAbsence,
  getAbsenceOrThrow,
  updateAbsence,
} from "@/lib/db/services/absence";
import { AbsenceParamsType } from "@/lib/types";
import { validateAbsenceData } from "@/lib/validate/absence";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: AbsenceParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const absenceId = Number(params.absenceId);
    const validatedAbsenceId = validateId(absenceId);
    if (!validatedAbsenceId.success)
      return handleValidationError(validatedAbsenceId.error);
    const absence = await getAbsenceOrThrow({ id: absenceId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Absence found");
    return sendOkResponse(absence);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: AbsenceParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const absenceId = Number(params.absenceId);
    const validatedAbsenceId = validateId(absenceId);
    if (!validatedAbsenceId.success)
      return handleValidationError(validatedAbsenceId.error);
    const absence = await getAbsenceOrThrow({ id: absenceId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Absence found");
    const body = await request.json();
    const validated = validateAbsenceData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const updatedAbsence = await updateAbsence(
      { id: absenceId },
      validated.data
    );
    return sendOkResponse(updatedAbsence);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: AbsenceParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const absenceId = Number(params.absenceId);
    const validatedAbsenceId = validateId(absenceId);
    if (!validatedAbsenceId.success)
      return handleValidationError(validatedAbsenceId.error);
    const absence = await getAbsenceOrThrow({ id: absenceId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Absence found");
    await deleteAbsence({ id: absenceId });
    return sendOkResponse({ message: "Absence deleted" });
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
