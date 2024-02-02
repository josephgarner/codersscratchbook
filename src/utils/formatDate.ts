export const formateDate = (seconds: number) => {
  const date = new Date(0);
  date.setUTCSeconds(seconds);
  return date.toLocaleDateString("en-au", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
