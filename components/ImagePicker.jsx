import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Card } from "@heroui/react";

export default function AdminImageUploader({setImg}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile)
      }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] }, // Solo imágenes seguras
    maxSize: 80 * 1024 * 1024, // Límite estricto de 2MB
    multiple: false
  });

  const uploadToBackend = async () => {
    if (!file) return;
    setLoading(true);

    setImg(file)
      setLoading(false);
  };

  useEffect(() => {
    // Cuando el componente se destruye, liberamos la memoria de la URL
    return () => {
      if (file) URL.revokeObjectURL(file.preview);
    };
  }, [file]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Card 
        {...getRootProps()} 
        className={`border-2 border-dashed transition-colors cursor-pointer
          ${isDragActive ? "border-primary bg-primary/10" : "border-default-200"}`}
      >
        {/* Usamos un div estándar en lugar de CardBody */}
        <div className="p-6 flex flex-col items-center justify-center min-h-40">
          <input {...getInputProps()} />
          
          {file ? (
            <img 
              src={file.preview} 
              alt="Preview" 
              className="h-40 w-full object-cover rounded-lg" 
            />
          ) : (
            <p className="text-default-500 text-center text-sm">
              {isDragActive 
                ? "Suelta la imagen aquí..." 
                : "Arrastra una imagen o haz clic para explorar"}
            </p>
          )}
        </div>
      </Card>

      {/* Alerta si pesa más de 2MB o no es formato válido */}
      {fileRejections.length > 0 && (
        <p className="text-danger text-tiny font-medium">
          El archivo es inválido o supera los 2MB permitidos.
        </p>
      )}

      {file && (
        <Button 
          color="primary" 
          isLoading={loading} 
          onPress={uploadToBackend}
        >
          Guardar Evento
        </Button>
      )}
    </div>
  );
}