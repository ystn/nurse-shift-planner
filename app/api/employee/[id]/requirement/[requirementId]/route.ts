import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import {
  deleteRequirement,
  getRequirementOrThrow,
  updateRequirement,
} from "@/lib/db/services/requirement";
import { RequirementParamsType } from "@/lib/types";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { validateRequirementData } from "@/lib/validate/requirement";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: RequirementParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const requirementId = Number(params.requirementId);
    const validatedRequirementId = validateId(requirementId);
    if (!validatedRequirementId.success)
      return handleValidationError(validatedRequirementId.error);
    const absence = await getRequirementOrThrow({ id: requirementId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Requirement found");
    return sendOkResponse(absence);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: RequirementParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const requirementId = Number(params.requirementId);
    const validatedRequirementId = validateId(requirementId);
    if (!validatedRequirementId.success)
      return handleValidationError(validatedRequirementId.error);
    const absence = await getRequirementOrThrow({ id: requirementId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Requirement found");
    const body = await request.json();
    const validated = validateRequirementData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const updatedRequirement = await updateRequirement(
      { id: requirementId },
      validated.data
    );
    return sendOkResponse(updatedRequirement);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: RequirementParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const requirementId = Number(params.requirementId);
    const validatedRequirementId = validateId(requirementId);
    if (!validatedRequirementId.success)
      return handleValidationError(validatedRequirementId.error);
    const absence = await getRequirementOrThrow({ id: requirementId });
    if (absence && absence.employeeId !== id)
      throw new Error("No Requirement found");
    await deleteRequirement({ id: requirementId });
    return sendOkResponse({ message: "Requirement deleted" });
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
