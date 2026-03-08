export const WA_PHONE = "+51955111454";

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}