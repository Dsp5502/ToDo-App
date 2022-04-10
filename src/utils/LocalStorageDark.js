export const getLocalStorageDark = () => {
  const DarkStorage = localStorage.getItem('theme');
  if (DarkStorage === null) {
    return undefined;
  }
  return JSON.parse(DarkStorage);
};

export const saveLocalStorageDark = (state) => {
  console.log(state);
  const DarkState = JSON.stringify(state);

  localStorage.setItem('theme', DarkState);
};
