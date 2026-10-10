// "XX99 Mark II Headphones" -> ["XX99 Mark II", "Headphones"]
export const splitName = (name: string) => {
  const words = name.split(" ");
  const lastWord = words.pop() ?? "";

  return [words.join(" "), lastWord] as const;
};
