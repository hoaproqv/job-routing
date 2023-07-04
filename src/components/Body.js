import React from "react";
import Header from "./Header";
import NavigationPage from "./NavigationPage";
import Content from "./Content";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <>
      <Header />

      <Content />

      <NavigationPage />

      <Outlet />
    </>
  );
}

export default Body;
