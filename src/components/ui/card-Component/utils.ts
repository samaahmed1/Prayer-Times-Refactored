export const formatTime = (time: string) => {
  if (!time) return "00 : 00";
  const [rawHours, rawMinutes] = time.split(":").map(Number);
  let hours: number = rawHours;
  const minutes: number = rawMinutes;
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutesFinal: string = minutes < 10 ? "0" + minutes : minutes.toString();
  return `${hours} : ${minutesFinal} ${period}`;
};