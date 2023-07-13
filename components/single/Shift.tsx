"use client";

import { Shift } from "@prisma/client";
import Typography from "../typography";
import { Label } from "../ui/label";
import { useTranslations } from "next-intl";

export type ShiftSingleProps = {
  shift: Shift;
};

export default function ShiftSingle({ shift }: ShiftSingleProps) {
  const t = useTranslations("Shift");
  return (
    <>
      <Typography variant="h1">{shift.name}</Typography>
      <Typography variant="p">
        {t("start")} - {t("end")} : {shift.start.getHours()}:
        {shift.start.getMinutes()} - {shift.end.getHours()}:
        {shift.end.getMinutes()}
      </Typography>
      <Typography variant="p">
        {t("breaktime")} : {shift.breaktime}
      </Typography>
    </>
  );
}
