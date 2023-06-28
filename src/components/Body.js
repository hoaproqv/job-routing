import React from "react";
import Header from "./Header";
import NavigationPage from "./NavigationPage";
import Content from "./Content";
import { Outlet } from "react-router-dom";

function Body({ data, setPage }) {
  return (
    <>
      <Header />

      <Content data={data} />

      <NavigationPage setPage={setPage} />

      <Outlet/>
    </>
  );
}

export default Body;
