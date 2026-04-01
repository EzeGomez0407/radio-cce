import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Importamos el cliente que creamos

// GET: Listar productos
export async function GET() {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
