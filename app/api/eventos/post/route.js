import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Importamos el cliente que creamos

// POST: Crear un producto
export async function POST(request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("productos")
    .insert([{ nombre: body.nombre, precio: body.precio }])
    .select(); // El .select() devuelve el objeto creado

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}
