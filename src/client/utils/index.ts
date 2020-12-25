export const convertTimeViewFormat = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  }
  return value.toString();
};

export const convertCountToSeconds = (
  seconds: number,
): string => convertTimeViewFormat(Math.trunc(seconds % 60));

export const convertCountToMinutes = (
  seconds: number,
): string => convertTimeViewFormat(Math.trunc((seconds / 60) % 60));

export const convertCountToHour = (
  seconds: number,
): string => Math.trunc(seconds / 60 / 60).toString();
