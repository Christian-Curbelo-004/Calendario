import { post } from "./api";

export default async function saveEventService({
  title,
  date,
  startTime,
  endTime,
  location,
  color,
}) {
  if (!title || !date || !startTime || !endTime || !color) {
    throw new Error("Missing Parameters");
  }

  return await post("/events", {
    title,
    date,
    startTime,
    endTime,
    location,
    color,
  });
}
