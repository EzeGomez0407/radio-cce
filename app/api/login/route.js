import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Comparamos contra las variables de entorno
    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
      console.log(email, password);

      const response = NextResponse.json(
        { message: "Acceso concedido" },
        { status: 200 }
      );

      // Seteamos la cookie de sesión
      response.cookies.set("isLoggedIn", "true", {
        httpOnly: true, // Seguridad: no se puede leer con JS en el cliente
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 4, // La sesión dura 2 horas
        path: "/",
      });

      return response;
    }
    console.log(email, password);

    // Caso: No entró en el IF (Credenciales mal)
    return NextResponse.json(
      { message: "Email o contraseña incorrectos" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error en el servidor", status: 500 });
  }
}
