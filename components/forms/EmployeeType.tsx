"use client";
import { ConfigDataSchema } from "@/lib/validate/config";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormFieldC from "../FormFieldC";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { EmployeeType } from "@prisma/client";
import {
  EmployeeTypeDataSchema,
  EmployeeTypeDataYupSchema,
} from "@/lib/validate/employee-type";
import { yupResolver } from "@hookform/resolvers/yup";
import { notFound } from "next/navigation";

export type EmployeeTypeFormProps = {
  employeeTypeId?: number | null;
};

export default function EmployeeTypeForm({
  employeeTypeId = null,
}: EmployeeTypeFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(employeeTypeId !== null);
  const [data, setData] = useState<EmployeeType | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/employee/type/${employeeTypeId}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        if (json === null) notFound();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (employeeTypeId !== null) fetchData();
  }, []);

  const form = useForm({
    resolver: yupResolver(EmployeeTypeDataYupSchema),
    defaultValues: {
      name: "",
    },
  });
  useEffect(() => {
    if (data !== null)
      form.reset({
        name: data?.name ?? "",
      });
  }, [data]);

  function onSubmit(formData: any) {
    console.log(formData);
    if (data !== null) {
      fetch(`/api/employee/type/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } else {
      fetch(`/api/employee/type`, {
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
      {error && <div>{error.message}</div>}
      {(data || employeeTypeId === null) && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormFieldC
              name="name"
              control={form.control}
              label="Name"
              description="Name of the employee type"
              Render={({ field }) => <Input {...field} type="text" />}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
}
