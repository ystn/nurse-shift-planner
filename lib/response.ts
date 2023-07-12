import { NextResponse } from "next/server";

export function handleErrorMessage(message: string) {
  return NextResponse.json({ message }, { status: 400 });
}

export function sendOkResponse(body: any) {
  return NextResponse.json(body, { status: 200 });
}

export function sendCreatedResponse(body: any) {
  return NextResponse.json(body, { status: 201 });
}
