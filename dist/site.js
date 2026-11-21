const weeklyHours = [
  { label: "11am–4pm", open: true },
  { label: "Closed", open: false },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "10am–6pm", open: true },
  { label: "9.30am–6pm", open: true },
];

const today = weeklyHours[new Date().getDay()];
const headerHours = document.querySelector("#header-hours");
const todayStatus = document.querySelector("#today-status");
const todayHours = document.querySelector("#today-hours");

if (headerHours && todayStatus && todayHours) {
  headerHours.textContent = today.open ? `Today · ${today.label}` : "Closed today · Reopens Tuesday";
  todayStatus.textContent = today.open ? "Open today" : "Closed today";
  todayHours.textContent = today.open ? today.label : "Reopens Tuesday at 10am";
}
