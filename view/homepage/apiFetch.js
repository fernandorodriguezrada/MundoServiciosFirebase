export const getTransport = async () => {
  const apiTransport = await fetch('http://localhost:5000/api/v1/shipping');
  const data = await apiTransport.json();

  return data;
};

export const postService = async (service) => {
  const apiServicesCreate = await fetch('http://localhost:5000/api/v1/services', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(service)
  });

  const result = await apiServicesCreate.json();

  return result;
}

