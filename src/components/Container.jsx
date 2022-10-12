import React from "react";

const Container = (props) => {
  return <div className="grid grid-flow-row auto-rows-max grid-cols-2 lg:grid-cols-4 p-6">{props.children}</div>;
};

export default Container;
