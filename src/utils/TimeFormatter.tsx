export function timeFormatting(currentTime) {
  if (!currentTime) return { startTime: "", endTime: "" };

  const startTime = new Date(currentTime.time_start)
    .toLocaleTimeString("da-DK")
    .substring(0, 5);
  const endTime = new Date(currentTime.time_end)
    .toLocaleTimeString("da-DK")
    .substring(0, 5);

  return { startTime, endTime };
}
