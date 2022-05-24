export const formatName = (
  name: string | undefined | null,
  value: number
): string => {
  if (name) {
    return name.length > value ? name.slice(0, value - 3) + "..." : name;
  }

  return "";
};
