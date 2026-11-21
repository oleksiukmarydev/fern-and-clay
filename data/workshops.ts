export type Workshop = {
  date: string;
  name: string;
  description: string;
  price: string;
};

export const workshops: Workshop[] = [
  { date: "Sat 28 Nov · 10am", name: "Houseplant foundations", description: "Light, watering and choosing the right compost.", price: "£28" },
  { date: "Sat 5 Dec · 3pm", name: "Winter plant care", description: "Cold windows, dry radiators and slower watering.", price: "£24" },
  { date: "Sat 12 Dec · 10am", name: "Propagate & share", description: "Take cuttings, root them and pot up two starters.", price: "£30" },
];
