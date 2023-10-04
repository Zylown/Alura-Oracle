export const CampoTitulo = [
  { required: true, message: "Por favor ingresa un título" },
  { min: 5, message: "El título debe contener más de 5 caracteres" },
  {
    max: 50,
    message: "El título no debe contener más de 50 caracteres",
  },
];

export const CampoUrlVideo = [
  { required: true, message: "Por favor ingresa una url de video" },
  { type: "url", message: "Video URL no válida" },
];

export const CampoUrlImagen = [
  { required: true, message: "Por favor ingresa una url de imagen" },
  { type: "url", message: "Video URL no válida" },
];

export const CampoCategoria = [
  { required: true, message: "Por favor ingresa una categoría" },
];

export const CampoAreaTexto = [
  { required: true, message: "Por favor ingresa una descripción" },
  {
    max: 100,
    message: "La descripcion no debe contener más de 100 caracteres",
  },
];

export const CampoSeguridad = [
  {
    required: false,
    message: "Por favor ingresa un código de seguridad",
  },
];

/* NUEVA CATEGORIA*/
export const CampoFormacion = [
  {
    required: true,
    message: "Por favor ingresa una formación",
  },
];
export const CampoDescripcion = [
  {
    required: true,
    message: "Por favor ingresa una descripción",
  },
];
export const CampoColor = [
  {
    required: true,
    message: "Por favor ingresa un color",
  },
];
