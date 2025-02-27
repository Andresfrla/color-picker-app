"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  // Inicializa la fecha en el cliente para evitar problemas de hidratación
  React.useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow h-80"
      suppressHydrationWarning
    />
  );
}
