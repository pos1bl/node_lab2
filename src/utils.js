export const safeJSON = (data, fallback) => {
  try {
      return JSON.parse(data);
  } catch {
      return fallback;
  }
};
