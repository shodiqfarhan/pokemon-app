import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <link rel="icon" href="/PokeBall.ico" />
      <main className="flex justify-center bg-slate-900">
        <div className="layout-container bg-white dark:bg-neutral-800 w-full h-full">
          <Header />
          {props.children}
        </div>
      </main>
    </>
  );
};

export default Layout;
