"use client";

const weeklyHours = [
  { label: "11am–4pm", open: true },
  { label: "Closed", open: false },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "9.30am–6pm", open: true },
] as const;

export function OpeningStatus({ compact = false }: { compact?: boolean }) {
  const today = weeklyHours[new Date().getDay()];

  if (compact) {
    return <span suppressHydrationWarning>{today.open ? `Today · ${today.label}` : "Closed today · Reopens Tuesday"}</span>;
  }

  return (
    <span suppressHydrationWarning>
      <strong>{today.open ? "Open today" : "Closed today"}</strong>
      <br />
      <span>{today.open ? today.label : "Reopens Tuesday at 10am"}</span>
    </span>
  );
}
