export const getServices = async () => {
  const apiServices = await fetch('http://localhost:5000/api/v1/services');
  const data = await apiServices.json();

  return data;
};