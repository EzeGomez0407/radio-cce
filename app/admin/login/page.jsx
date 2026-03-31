"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex flex-col justify-center h-full items-center mt-10">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label className="text-lg">Email</Label>
          <Input placeholder="john@example.com" className="text-xl" />
          <FieldError className="text-[16px]"/>
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "La contraseña debe tener al menos 8 caracteres";
            }
            if (!/[A-Z]/.test(value)) {
              return "La contraseña debe contener al menos una mayúscula";
            }
            if (!/[0-9]/.test(value)) {
              return "La contraseña debe contener al menos un número";
            }

            return null;
          }}
        >
          <Label className="text-lg">Password</Label>
          <Input placeholder="Ingresa la contraseña" className="text-xl" />
          <Description className="text-[17px]">
            Debe tener al menos 8 caracteres con 1 mayúscula y 1 número
          </Description>
          <FieldError className="text-[16px]"/>
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Ingresar
          </Button>
          <Button type="reset" variant="secondary">
            Reiniciar
          </Button>
        </div>
      </Form>
    </div>
  );
}
