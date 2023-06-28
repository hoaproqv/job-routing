import { createContext, useEffect, useState } from "react";
import getAPI from "./components/getAPI";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import Item from "./components/page/Item";


export const CardContext = createContext();

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [path, setPath] = useState("/item");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(page);
      setData(data);
    };
    fetchData();
  }, [page]);

  return (
    <CardContext.Provider value={setPath}>
      <Routes>
        <Route path="/" element={<Body data={data} setPage={setPage} />}>
          <Route
            path='/:id'
            element={<Item data={data}/>}
          />
        </Route>
      </Routes>
    </CardContext.Provider>
  );
}

export default App;
