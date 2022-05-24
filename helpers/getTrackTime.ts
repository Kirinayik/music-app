export const getTrackTime = (ms: number): string => {
  const min = Math.floor(ms / 60000);
  const seconds = +((ms % 60000) / 1000).toFixed(0);

  return seconds === 60
    ? min + 1 + ":00"
    : min + ":" + (seconds < 10 ? "0" : "") + seconds;
};
