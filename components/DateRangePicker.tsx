"use client";

import * as React from "react";
import { addDays, format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type DatePickerWithRangeProps = React.HTMLAttributes<HTMLDivElement> & {
  to: Date;
  from: Date;
  defaultValue: DateRange;
  setTo: (date: Date) => void;
  setFrom: (date: Date) => void;
};

export function DatePickerWithRange({
  className,
  to = new Date(),
  from = addDays(new Date(), 5),
  defaultValue,
  setTo,
  setFrom,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(defaultValue);
  function handleDateChange(range: DateRange | undefined, selectedDay: Date) {
    console.log(range, selectedDay);
    setDate(range);
    if (!range && selectedDay) setFrom?.(selectedDay);
    if (range?.from) setFrom(range.from);
    if (range?.to) setTo(range.to);
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
