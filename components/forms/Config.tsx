"use client";
import { ConfigDataSchema, ConfigDataYupSchema } from "@/lib/validate/config";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { yupResolver } from "@hookform/resolvers/yup";
import { z } from "zod";
import FormFieldC from "../FormFieldC";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Config } from "@prisma/client";

export default function ConfigForm() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Config | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReset, setIsReset] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/config");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const form = useForm({
    resolver: yupResolver(ConfigDataYupSchema),
    defaultValues: {
      patientNumber: 0,
      bedsNumber: 0,
      maxHours: 0,
    },
  });
  useEffect(() => {
    if (data !== null) {
      form.reset({
        patientNumber: data?.patientNumber ?? 0,
        bedsNumber: data?.bedsNumber ?? 0,
        maxHours: data?.maxHours ?? 0,
      });
      setIsReset(true);
    }
  }, [data]);

  function onSubmit(formData: any) {
    if (data !== null) {
      fetch(`/api/config/?id=${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } else {
      fetch(`/api/config`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }
  }
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && isReset && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormFieldC
              name="patientNumber"
              control={form.control}
              label="Patient Number"
              description="Number of patients in the hospital"
              Render={({ field }) => (
                <Input {...field} type="number" inputMode="decimal" />
              )}
            />
            <FormFieldC
              name="bedsNumber"
              control={form.control}
              label="Beds Number"
              description="Number of beds in the hospital"
              Render={({ field }) => <Input {...field} type="number" />}
            />
            <FormFieldC
              name="maxHours"
              control={form.control}
              label="Max Hours"
              description="Max hours of shift"
              Render={({ field }) => <Input {...field} type="number" />}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
}
