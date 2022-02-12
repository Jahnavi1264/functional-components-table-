import React from "react";
import ReactDom from "react-dom";
import Table from "./Table";

const App = () =>
{
   return( 
     <>
      <Table />;
     
     </>
   );
};

ReactDom.render(
  <div>
    <Table />  

  </div>,
  document.getElementById("root")
);