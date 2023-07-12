import {
  handleErrorMessage,
  sendCreatedResponse,
  sendOkResponse,
} from "@/lib/response";
import { createRequirement, getRequirements } from "@/lib/services/requirement";
import { ParamsType } from "@/lib/types";
import { validateRequirementData } from "@/lib/validate/requirement";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { NextRequest } from "next/server";
import { validateRequirementEmployeeData } from "@/lib/validate/requirement-employee";
import { createRequirementEmployee } from "@/lib/services/requirement-employee";
import { createRequirementShift } from "@/lib/services/requirement-shift";
import { validateRequirementShiftData } from "@/lib/validate/requirement-shift";
import { validateRequirementIntervalData } from "@/lib/validate/requirement-interval";
import { createRequirementInterval } from "@/lib/services/requirement-interval";

export async function GET(
  request: NextRequest,
  { params }: { params: ParamsType }
) {
  try {
    const id = Number(params.id);
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const requirements = await getRequirements({ employeeId: id });
    return sendOkResponse(requirements);
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
    const validated = validateRequirementData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const validatedRequirementEmployee = validateRequirementEmployeeData(body);
    const validatedRequirementShift = validateRequirementShiftData(body);
    const validatedRequirementInterval = validateRequirementIntervalData(body);
    if (
      !validatedRequirementEmployee.success &&
      !validatedRequirementShift.success &&
      !validatedRequirementInterval.success
    )
      throw new Error("Invalid requirement data");
    const requirement = await createRequirement({
      ...validated.data,
      employee: { connect: { id } },
    });
    if (validatedRequirementEmployee.success)
      await createRequirementEmployee({
        employee: {
          connect: { id: validatedRequirementEmployee.data.employeeId },
        },
        requirement: { connect: { id: requirement.id } },
      });
    if (validatedRequirementShift.success)
      await createRequirementShift({
        shift: { connect: { id: validatedRequirementShift.data.shiftId } },
        requirement: { connect: { id: requirement.id } },
      });
    if (validatedRequirementInterval.success)
      await createRequirementInterval({
        ...validatedRequirementInterval.data,
        requirement: { connect: { id: requirement.id } },
      });

    return sendCreatedResponse(requirement);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
