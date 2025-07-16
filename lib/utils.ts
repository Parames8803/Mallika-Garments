import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWhatsAppQuote(product: { name: string; price: string; ageRange?: string }) {
  const text =
    `🛒 *Quick Quote Request*\n` +
    `-----------------------------\n` +
    `👕 *Product*: ${product.name}\n` +
    `💵 *Price*: ${product.price}\n` +
    (product.ageRange ? `🎂 *Age Range*: ${product.ageRange}\n` : "") +
    `-----------------------------`;
  window.open(`https://wa.me/919677971702?text=${encodeURIComponent(text)}`);
}
