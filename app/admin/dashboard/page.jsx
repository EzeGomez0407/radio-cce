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
  Description,
  ListBox,
  Select,
  toast,
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

const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "eventos_preset"); // El nombre que pusiste en el paso anterior
  formData.append("cloud_name", process.env.CLOUDINARY_NAME);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/djqttard2/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  if(!res.ok) return {data, error: "hubo un error con la carga de imagen"}
  return{ data: data.secure_url, error: undefined}; // Esta es la URL que guardarás en tu DB
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
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [img, setImage] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMsg({
      title: " ",
      description: " ",
      time: " ",
      date: " ",
      img: " "
    });
    setEvent((event) => ({
      ...event,
      [name]: value,
    }));
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    if(!img) return setErrorMsg(e=>({...e, img: "Debe ingresar una imagen al evento"}))
    const { data, error } = validateDataAddEvent(event);

    if (error) {
      for (let i = 0; i < error.length; i++) {
        setErrorMsg((err) => ({
          ...err,
          [error[i].path[0]]: error[i].message,
        }));
      }
      return;
    }
    setLoading(true);
    let base64Image = "";
    if (img) base64Image = await fileToBase64(img);

    const {data: urlImg, error: urlImgError} = await uploadImageToCloudinary(base64Image)
    if(urlImgError){
      console.log(urlImgError);
      return setErrorMsg(e=>({...e, date: urlImgError.error}))
    }
    const res = await fetch("/api/events/post", {
      method: "POST",
      body: JSON.stringify({
        type: ["semanal", "especial"].includes(type)
          ? type
          : "semanal",
        data,
        image: urlImg,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    const json = await res.json();
    if (!res.ok) {
      return toastError(json.message);
    }

    setErrorMsg({
      title: " ",
      description: " ",
      time: " ",
      date: " ",
    });
    setEvent({
      title: "",
      description: "",
      time: "",
      date: "",
    });
    setTime("");
    setDate("");
    setImage("");
    setType("");
    return toastSucces();
  };

  useEffect(() => {
    setEvent((event) => ({
      ...event,
      time: time,
    }));
  }, [time]);

  useEffect(() => {
    setEvent((event) => ({
      ...event,
      date: date,
    }));
  }, [date]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Puedes retornar un esqueleto o nada para evitar el mismatch
    return null;
  }
  return (
    <div className="flex flex-col items-center w-full relative pb-14 overflow-hidden ">
      <Card className="w-full items-stretch md:flex-row relative">
        <div className=" rounded-2xl h-65">
          <ImageUploader setImg={setImage} reset={(callback)=>callback()}/>
          <p className="text-danger text-sm h-10">{errorMsg.img}</p>
        </div>
        <div className="flex flex-1 flex-col gap-0">
          <Card.Header>
            <Card.Title>
              <Input
                fullWidth
                placeholder="Título del evento"
                className="border border-blue-50 text-2xl py-1"
                name="title"
                onChange={handleChange}
                value={event.title}
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
                value={event.description}
              />
            </Card.Description>
            <p className="text-danger text-sm h-10">{errorMsg.description}</p>
          </Card.Header>
          <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col mb-3">
              <TimeField className="w-[256px]" name="time" onChange={setTime} value={time}>
                <Label>Hora</Label>
                <TimeField.Group>
                  <TimeField.Input>
                    {(segment) => <TimeField.Segment segment={segment} />}
                  </TimeField.Input>
                </TimeField.Group>
              </TimeField>
              <p className="text-danger text-sm h-10">{errorMsg.time}</p>
              <DatePickerComponent onChange={setDate} />
              <p className="text-danger text-sm h-10">{errorMsg.date}</p>
              <SelectType setValue={setType} />
            </div>
          </Card.Footer>
          <Button
            isDisabled={loading}
            onClick={handleOnClick}
            className=" h-12 w-75 "
            style={{ fontSize: 18 }}
          >
            {!loading ? "Agregar evento" : <LoadingProgressBar />}
          </Button>
        </div>
      </Card>
    </div>
  );
}

function DatePickerComponent({ onChange, ...prop }) {
  return (
    <DatePicker onChange={onChange} className="w-64" name="date" {...prop}>
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
  const timeIsString = typeof dataEvent.time == "string";
  const dateIsString =
    typeof dataEvent.date == "string" || dataEvent.date == null;
  const dataEventFormated = dataEvent;
  const today = new Date();
  let dateFormated = dataEvent.date == null ? "" : dataEvent.date;
  let date;
  let time = "";

  if (dataEvent.date && !dateIsString) {
    date = new Date(
      dataEvent.date.year,
      dataEvent.date.month - 1,
      dataEvent.date.day
    );
    // Comprobamos que la fecha sea mayor que "hoy"
    if (today > date)
      return {
        error: [
          { path: ["date"], message: "La fecha que seleccionó ya pasó." },
        ],
      };

    if (date.getDay() < 10) dateFormated = `0${date.getDay()}/`;
    else dateFormated = `${date.getDay()}/`;

    if (date.getMonth() < 10)
      dateFormated = dateFormated + `0${date.getMonth()}/`;
    else dateFormated = dateFormated + `${date.getMonth()}/`;

    dateFormated = dateFormated + `${date.getFullYear()}`;
    dataEventFormated.date = dateFormated;
  } else dataEventFormated.date = dateFormated;

  // Comprobamos que se haya seleccionado una hora
  if (!dataEvent.time)
    return { error: [{ path: ["time"], message: "Especifique la hora" }] };

  // Formateo de hora seleccionada solo si no es un string
  if (!timeIsString) {
    if (dataEvent.time.hour < 10) time = `0${dataEvent.time.hour}:`;
    else time = `${dataEvent.time.hour}:`;

    if (dataEvent.time.minute < 10) time = time + `0${dataEvent.time.minute}`;
    else time = time + dataEvent.time.minute;

    dataEventFormated.time = time;
  }

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

  return { data, error: null };
}

export function SelectType({ setValue }) {
  return (
    <Select
      className="w-[256px]"
      placeholder="Semanal por defecto"
      onChange={setValue}
    >
      <Label>Tipo de evento</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="semanal" textValue="Semanal">
            Semanal
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="especial" textValue="Especial">
            Especial
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
      <Description className="text-sm">
        Los eventos <b>semanales</b> se repiten todas las semanas, los{" "}
        <b>especiales</b> son eventos de festejos que se hacen pocas veces al
        año.
      </Description>
    </Select>
  );
}

import { ProgressBar } from "@heroui/react";
import { HardDrive } from "@gravity-ui/icons";

export function LoadingProgressBar() {
  return (
    <ProgressBar isIndeterminate aria-label="Loading" className="w-64">
      <Label>Loading...</Label>
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
  );
}

function toastError(msg) {
  return toast.danger("Error", {
    actionProps: { variant: "danger" },
    description: msg,
    indicator: <HardDrive />,
  });
}
function toastSucces(msg) {
  return toast.success("Bien!", {
    actionProps: {
      className: "bg-success text-success-foreground",
    },
    description: "Se agrego el evento con éxito",
  });
}
