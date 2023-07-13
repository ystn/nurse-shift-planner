import { CustomZodError } from "../validate/error";
import { validateShiftEmployeeTypeData } from "../validate/shfit-employee-type";
import { createMultipleShiftEmployeeTypes as createMultipleShiftEmployeeTypesDB } from "../db/services/shift-employee-type";

export async function createMultipleShiftEmployeeTypes(
  shiftId: number,
  employeeTypes: any[]
) {
  const shiftEmployeeTypes = employeeTypes.map((employeeType: any) => {
    console.log(employeeType);
    const validationShiftEmployeeType = validateShiftEmployeeTypeData({
      ...employeeType,
      shiftId,
    });
    if (!validationShiftEmployeeType.success)
      throw new CustomZodError(validationShiftEmployeeType.error);
    return validationShiftEmployeeType.data;
  });
  return await createMultipleShiftEmployeeTypesDB(shiftEmployeeTypes);
}
