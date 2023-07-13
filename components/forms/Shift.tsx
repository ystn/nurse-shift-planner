"use client";
import { ConfigDataSchema } from "@/lib/validate/config";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormFieldC from "../FormFieldC";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState, useTransition } from "react";
import { Shift } from "@prisma/client";
import { ShiftDataSchema, ShiftDataYupSchema } from "@/lib/validate/shift";
import { yupResolver } from "@hookform/resolvers/yup";
import { notFound } from "next/navigation";
import { DatePickerWithRange } from "../DateRangePicker";
import { useTranslations } from "next-intl";
import FormFieldF from "../FormFieldF";
import { createShift, getShift, updateShift } from "@/lib/requests/shift";
import { addDays } from "date-fns";

export type ShiftFormProps = {
  shiftId?: number | null;
};

export default function ShiftForm({ shiftId = null }: ShiftFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(shiftId !== null);
  const [data, setData] = useState<Shift | null>(null);
  const [error, setError] = useState<any>(null);
  const t = useTranslations("Shift");

  useEffect(() => {
    async function fetchData() {
      try {
        if (shiftId !== null) setData(await getShift(shiftId));
      } catch (error) {
        setError(error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    }
    if (shiftId !== null) fetchData();
  }, []);

  const form = useForm({
    resolver: yupResolver(ShiftDataYupSchema),
    defaultValues: {
      name: "",
      start: new Date(),
      end: addDays(new Date(), 2),
      breaktime: 0,
    },
  });
  useEffect(() => {
    if (data !== null)
      form.reset({
        name: data?.name ?? "",
      });
  }, [data]);

  function onSubmit(formData: any) {
    if (data !== null) {
      if (shiftId !== null) updateShift(shiftId, formData);
    } else {
      createShift(formData);
    }
  }
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {(data || shiftId === null) && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormFieldC
              name="name"
              control={form.control}
              label={t("name")}
              description="Name of the employee type"
              Render={({ field }) => <Input {...field} type="text" />}
            />
            <FormFieldC
              name="start"
              control={form.control}
              label="Name"
              description="Name of the employee type"
              Render={({ field: fieldStart }) => (
                <FormFieldF
                  name="end"
                  control={form.control}
                  Render={({ field: fieldEnd }) => (
                    <DatePickerWithRange
                      defaultValue={{
                        from: fieldStart.value,
                        to: fieldEnd.value,
                      }}
                      setFrom={fieldStart.onChange}
                      setTo={fieldEnd.onChange}
                    />
                  )}
                />
              )}
            />
            <FormFieldC
              name="breaktime"
              control={form.control}
              label={t("breaktime")}
              description="Breaktime in this shift"
              Render={({ field }) => <Input {...field} type="number" />}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
}
