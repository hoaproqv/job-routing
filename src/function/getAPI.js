const getAPI = async ({ page, id, search }) => {
  let param = "";

  if (search) {
    param += `?q=${search}&_page=${page}&_limit=6`;
  } else {
    if (id) {
      param += `/${id}`;
    }
    if (page) {
      param += `?_page=${page}&_limit=6`;
    }
  }
  const res = await fetch(`http://localhost:8000/job${param}`);
  const data = await res.json();
  return data;
};

export default getAPI;
