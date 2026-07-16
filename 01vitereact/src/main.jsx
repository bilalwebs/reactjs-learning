import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// export function MyApp() {
//   return (
//     <div>
//       <h1>Billal ffffff</h1>
//     </div>
//   );
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

// const anotherElement = (
//   <a href="https=//google.com" target="_blank">
//     Visit Google
//   </a>
// );

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "vist to google ",
// );

// const reactElement = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "hello"),
// );
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {/* {anotherElement} */}
    {/* {reactElement} */}
  </StrictMode>,
);
