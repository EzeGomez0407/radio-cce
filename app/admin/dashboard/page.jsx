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
  Button,
} from "@heroui/react";
import { useEffect, useState } from "react";
import ImageUploader from "../../../components/ImagePicker";

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    title: " ",
    description: " ",
    time: " ",
    date: " ",
  });
  const [event, setEvent] = useState({
    title: "",
    description: "",
    time: "",
    date: "",
  });
  const [time, setTime] = useState({});
  const [date, setDate] = useState({});
  const [img, setImage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMsg(({
      title: " ",
      description: " ",
      time: " ",
      date: " ",
    }))
    console.log(name, ": ", value);
    setEvent((event) => ({
      ...event,
      [name]: value,
    }));
  };

  const handleOnClick = async (e) => {
    e.preventDefault();

    const { data, error } = validateDataAddEvent(event);

    if (error) {
      for (let i = 0; i < error.length; i++) {
        setErrorMsg((err) => ({
          ...err,
          [error[i].path[0]]: error[i].message,
        }));
      }
      return
    }

    try {
      const base64Image = await fileToBase64(img)
      
      const res = await fetch("/api/events/post",{
        method: "POST",
        body: JSON.stringify({
          type: "semanal",
          data,
          image: base64Image
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res);
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    setEvent((event) => ({
      ...event,
      time: time,
    }));

    console.log(event);
  }, [time]);

  useEffect(() => {
    setEvent((event) => ({
      ...event,
      date: date,
    }));

    console.log(event);
  }, [date]);

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
        <div className=" rounded-2xl h-65 w-100">
          <ImageUploader setImg={setImage}/>
        </div>
        <div className="flex flex-1 flex-col gap-0">
          <Card.Header className="">
            <Card.Title>
              <Input
                fullWidth
                placeholder="Título del evento"
                className="border border-blue-50 text-2xl py-1"
                name="title"
                onChange={handleChange}
              />
            </Card.Title>
              <p className="text-danger text-sm h-10">{errorMsg.title}</p>
            <Card.Description>
              <TextArea
                fullWidth
                placeholder="Añade una descripción al evento..."
                className="border border-blue-50 h-25"
                name="description"
                onChange={handleChange}
              />
            </Card.Description>
              <p className="text-danger text-sm h-10">{errorMsg.description}</p>
          </Card.Header>
          <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <TimeField className="w-[256px]" name="time" onChange={setTime}>
                <Label>Hora</Label>
                <TimeField.Group>
                  <TimeField.Input>
                    {(segment) => <TimeField.Segment segment={segment} />}
                  </TimeField.Input>
                </TimeField.Group>
              </TimeField>
              <DatePickerComponent onChange={setDate} />
              <p className="text-danger text-sm h-10">{errorMsg.time}</p>
              <p className="text-danger text-sm h-10">{errorMsg.date}</p>

            </div>
          </Card.Footer>
        </div>
        <Button onClick={handleOnClick}>Agregar evento</Button>
      </Card>
    </div>
  );
}

function DatePickerComponent({ onChange }) {
  return (
    <DatePicker onChange={onChange} className="w-64" name="date">
      <Label>Fecha</Label>
      <DateField.Group fullWidth>
        <DateField.Input on="true">
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

import z from "zod";

export function validateDataAddEvent(dataEvent) {
  const dataEventFormated = dataEvent;
  const today = new Date();
  const date = new Date(
    dataEvent.date.year,
    dataEvent.date.month - 1,
    dataEvent.date.day
  );
  let dateFormated = "";
  let time = "";

  // Comprobamos que la fecha sea mayor que "hoy"
  if (today > date )
    return {
      error: [{ path: ["date"], message: "La fecha que seleccionó ya pasó." }],
    };

  if (date.getDay() < 10) dateFormated = `0${date.getDay()}/`;
  else dateFormated = `${date.getDay()}/`;

  if (date.getMonth() < 10)
    dateFormated = dateFormated + `0${date.getMonth()}/`;
  else dateFormated = dateFormated + `${date.getMonth()}/`;

  dateFormated = dateFormated + `${date.getFullYear()}`;
  dataEventFormated.date = dateFormated;

  // Comprobamos que se haya seleccionado una hora
  if (!dataEvent.time)
    return { error: [{ path: ["time"], message: "Especifique la hora" }] };

  // Formateo de hora seleccionada
  if (dataEvent.time.hour < 10) time = `0${dataEvent.time.hour}:`;
  else time = `${dataEvent.time.hour}:`;

  if (dataEvent.time.minute < 10) time = time + `0${dataEvent.time.minute}`;
  else time = time + dataEvent.time.minute;

  dataEventFormated.time = time;

  const Event = z.object({
    title: z.string().min(5, "El titulo debe tener al menos 5 caracteres."),
    description: z
      .string()
      .min(10, "La descripción debe tener al menos 10 caracteres."),
    time: z.string(),
    date: z.string(),
  });

  const { success, error, data } = Event.safeParse(dataEventFormated);

  if (!success) {
    console.log(error.issues);
    return { error: error.issues };
  }
  console.log(data);

  return { data, error: null };
}
