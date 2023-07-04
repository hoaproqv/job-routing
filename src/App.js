import { useEffect, useState, createContext } from "react";
import getAPI from "./function/getAPI";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import Item from "./components/page/Item";
import Login from "./components/login-data/Login";
import "./css/App.css";

export const ContextValues = createContext();

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [search, setSearch] = useState("");
  const [path, setPath] = useState("/");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI({ page: page, search: search });
      setData(data);
    };
    fetchData();
  }, [page, search]);

  return (
    <ContextValues.Provider
      value={{
        data,
        setPage,
        isLogin,
        setIsLogin,
        dataUser,
        setDataUser,
        search,
        setSearch,
        path,
        setPath,
      }}
    >
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/jobs/:id" element={<Item />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </ContextValues.Provider>
  );
}

export default App;
