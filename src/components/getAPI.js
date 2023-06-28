const getAPI = async (page) => {
  const res = await fetch(`http://localhost:8000/job?_page=${page}&_limit=6`);
  const data = await res.json();
  return data;
};

export default getAPI;
