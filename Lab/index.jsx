import React from "react";
import ReactDom from "react-dom/client";



function hello(props){
  return <h1>hello world</h1>;
}
ReactDom.render(<hello />, document.querySelector("#showbtn"));









