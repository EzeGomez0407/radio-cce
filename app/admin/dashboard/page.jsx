"use client";
import {
  Card,
  Input,
  Label,
  TextArea,
  TimeField,
  Calendar,
  DateField,
  DatePicker,
} from "@heroui/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Puedes retornar un esqueleto o nada para evitar el mismatch
    return null;
  }
  return (
    <div className="w-full">
      <Card className="w-full items-stretch md:flex-row">
        <div className=" rounded-2xl h-[260px] w-[400px]">
          <button className="w-full h-full bg-gray-200 rounded-2xl border-2 border-gray-400"></button>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Card.Header className="gap-5">
            <Card.Title>
              <Input
                fullWidth
                placeholder="Título del evento"
                className="border-1 border-blue-50 text-2xl py-1"
              />
            </Card.Title>
            <Card.Description>
              <TextArea
                fullWidth
                placeholder="Añade una descripción al evento..."
                className="border-1 border-blue-50 h-25"
              />
            </Card.Description>
          </Card.Header>
          <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <TimeField className="w-[256px]" name="time">
                <Label>Hora</Label>
                <TimeField.Group>
                  <TimeField.Input>
                    {(segment) => <TimeField.Segment segment={segment} />}
                  </TimeField.Input>
                </TimeField.Group>
              </TimeField>
              <DatePickerComponent />
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}

function DatePickerComponent() {
  return (
    <DatePicker className="w-64" name="date">
      <Label>Fecha</Label>
      <DateField.Group fullWidth>
        <DateField.Input>
          {(segment) => <DateField.Segment segment={segment} />}
        </DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover>
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({ year }) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
  );
}
