
const unitMap: Record<string, string> = {
  kg: "কেজি",
  kilogram: "কেজি",
  kilograms: "কেজি",
  g: "গ্রাম",
  gram: "গ্রাম",
  grams: "গ্রাম",
  litre: "লিটার",
  liter: "লিটার",
  litres: "লিটার",
  liters: "লিটার",
  l: "লিটার",
  ml: "মিলিলিটার",
  milliliter: "মিলিলিটার",
  millilitre: "মিলিলিটার",
  piece: "পিস",
  pieces: "পিস",
  pcs: "টি",
  pc: "টি",
  dozen: "ডজন",
  pack: "প্যাকেট",
  packet: "প্যাকেট",
  packets: "প্যাকেট",
  bottle: "বোতল",
  bottles: "বোতল",
};

export function translateUnit(unit: string): string {
  return unitMap[unit.trim().toLowerCase()] ?? unit;
}