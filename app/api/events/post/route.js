import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Importamos el cliente que creamos

// POST: Crear un producto
export async function POST(request) {
  try {
  const body = await request.json();
  const {image, data, type} = body
  
  if(!image) return NextResponse.json({ message: "Debe enviar una imagen" }, { status: 400 });
  
  // const {secure_url} = await cloudinaryService(image); 
    
  const { data: dataResponse } = await supabase
    .from("events")
    .insert([{ type, data: {...data, image} }])
    .select(); // El .select() devuelve el objeto creado

    return NextResponse.json(dataResponse, { status: 201 });

  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ message: "Error de servidor", error }, { status: 400 });
  }
}

import { v2 as cloudinary } from "cloudinary";

export async function cloudinaryService(base64String) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Cloudinary entiende el string Base64 automáticamente
  const result = await cloudinary.uploader.upload(base64String, {
    folder: "eventos",
  });

  return result;
}

/* 
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
      fetch_format: 'auto',
      quality: 'auto'
  });
  
  console.log(optimizeUrl);
  
  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url('shoes', {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
  }); */
