export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// Replace "-"" with " "
export const space = (word) => {
  return word.replace(/-/g, " ");
};
