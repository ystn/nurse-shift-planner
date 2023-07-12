import {
  handleErrorMessage,
  sendCreatedResponse,
  sendOkResponse,
} from "@/lib/response";
import { createConfig, getConfigs, updateConfig } from "@/lib/services/config";
import {
  validateConfigData,
  validatePartialConfigData,
} from "@/lib/validate/config";
import { handleValidationError } from "@/lib/validate/error";
import { validateId } from "@/lib/validate/id";
import { Config } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const configs = await getConfigs();
    let res: Config[] | Config = configs;
    if (res.length > 0 && request.nextUrl.searchParams.get("q") !== "all")
      res = configs[0];
    return sendOkResponse(res);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validateConfigData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const config = await createConfig(validated.data);
    return sendCreatedResponse(config);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const id = Number(request.nextUrl.searchParams.get("id"));
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const body = await request.json();
    const validated = validateConfigData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const config = await updateConfig({ id }, validated.data);
    return sendOkResponse(config);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const id = Number(request.nextUrl.searchParams.get("id"));
    const validatedId = validateId(id);
    if (!validatedId.success) return handleValidationError(validatedId.error);
    const body = await request.json();
    const validated = validatePartialConfigData(body);
    if (!validated.success) return handleValidationError(validated.error);
    const config = await updateConfig({ id }, validated.data);
    return sendOkResponse(config);
  } catch (e: any) {
    return handleErrorMessage(e.message);
  }
}
