import {
  createShiftShift as createShiftShiftDB,
  createMultipleShiftShifts as createMultipleShiftShiftsDB,
} from "../db/services/shift-shift";
import { CustomZodError } from "../validate/error";
import { validateShiftShiftData } from "../validate/shift-shift";

export type ShiftShiftData = {
  shiftId: number;
  delta: number;
};

export async function createShiftShift(
  firstShiftId: number,
  data: ShiftShiftData
) {
  const validation = validateShiftShiftData({
    delta: data.delta,
    secondShiftId: data.shiftId,
    firstShiftId,
  });
  if (!validation.success) throw new CustomZodError(validation.error);
  return await createShiftShiftDB({
    firstShift: { connect: { id: validation.data.firstShiftId } },
    secondShift: { connect: { id: validation.data.secondShiftId } },
    delta: validation.data.delta,
  });
}

export async function createMultipleShiftShifts(
  shiftId: number,
  shifts: any[]
) {
  const shiftShifts: any[] = shifts.map((shift: any) => {
    const validation = validateShiftShiftData({
      firstShiftId: shiftId,
      delta: shift.delta,
      secondShiftId: shift.shiftId,
    });
    if (!validation.success) throw new CustomZodError(validation.error);
    return validation.data;
  });
  return await createMultipleShiftShiftsDB(shiftShifts);
}
