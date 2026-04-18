// Reemplaza con el número de WhatsApp real (formato internacional sin +)
export const WA_NUMBER = '34600000000'

export const WA_URL = (text = 'Hola, quiero pedir presupuesto de materiales para una obra en Málaga.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
