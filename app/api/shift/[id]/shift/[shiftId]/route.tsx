import { getShiftShift, getShiftShifts } from "@/lib/db/services/shift-shift";
import { handleErrorMessage, sendOkResponse } from "@/lib/response";
import { ParamsType } from "@/lib/types";
import { NextRequest } from "next/server";

export type ShiftShiftParamsType = {
  id: number;
  shiftId: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: ShiftShiftParamsType }
) {
  try {
    const shifts = await getShiftShifts({
      OR: [
        { firstShiftId: params.id, secondShiftId: params.shiftId },
        { firstShiftId: params.shiftId, secondShiftId: params.id },
      ],
    });
    return sendOkResponse(shifts);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
