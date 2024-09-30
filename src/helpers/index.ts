export const splitString = (content: string, word: string) => {
  const result = content.split(word);

  return result;
};

export const colorWordInString = (
  text: string,
  wordToColor: string,
  colorClass: string
) => {
  const regex = new RegExp(`(${wordToColor})`, "gi");

  return text.replace(
    regex,
    `<span style={{ color: "${colorClass}"}}>$1</span>`
  );
};
