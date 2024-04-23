export const getImageUrl = (path: string) => {
  const new_path = new URL(`/assets/${path}`, import.meta.url);
  console.log(new_path);
  
  return new_path.href;
};
