import { Prisma, Shift } from "@prisma/client";

export async function createShift(
  shift: Prisma.ShiftCreateInput
): Promise<Shift> {
  const response = await fetch("/api/shift", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shift),
  });
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export async function getShift(id: number): Promise<Shift> {
  const response = await fetch(`/api/shift/${id}`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export async function updateShift(id: number, shift: Prisma.ShiftUpdateInput) {
  const response = await fetch(`/api/shift/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shift),
  });
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}
