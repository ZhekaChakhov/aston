export const getCurrentUser = (): string | null => {
  const userStr = localStorage.getItem("currentUser");
  try {
    return JSON.parse(userStr!).uid;
  } catch (error) {
    return null;
  }
};
