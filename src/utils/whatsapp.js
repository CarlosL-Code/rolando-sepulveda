import data from '../data.json';

export const whatsappNumber = (data.contacto.celular_whatsapp || '').replace(/\D/g, '');

export function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
