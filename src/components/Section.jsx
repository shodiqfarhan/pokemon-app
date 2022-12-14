import React from "react";

const Section = (props) => {
  return (
    <div className={`${!props.noBorder && "border border-black dark:border-white rounded-2xl shadow-lg shadow-black"} p-5 m-3 ${props.center && "flex flex-col justify-center"} ${props.fill && "col-span-2"} ${props.bgColor}`}>
      {props.children}
    </div>
  );
};

export default Section;
