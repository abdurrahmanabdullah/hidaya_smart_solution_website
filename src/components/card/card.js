// Card.js
// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../App.css";

// const Card = ({ title, subtitle, subhead }) => (
//   <div className="product-card">
//     {" "}
//     {/* apply the .card class */}
//     <h4>{title}</h4>
//     <p>{subtitle}</p>
//     <p>{subhead}</p>
//   </div>
// );

// export default Card;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.css";

const Card = ({ title, subtitle, button }) => (
  <div className="product-card">
    {" "}
    {/* apply the .card class */}
    <h4>{title}</h4>
    <p>{subtitle}</p>
    <div style={{ textAlign: "center", textDecoration: "none" }}>
      <button style={{ border: "none" }}>{button}</button>
    </div>
  </div>
);

export default Card;

// Card.js
// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../App.css";

// const Card = ({ title, subtitle, route }) => {
//   // Define a function to construct the route endpoint
//   const constructRoute = (cardRoute) => {
//     return `https://hidayahsmart.solutions/product/${cardRoute}`;
//   };
//   // Define a mapping of routes
//   const routes = {
//     lucentchart: "lucentchart",
//     qad: "qad",
//     qbot: "qbot",
//     nursecall: "nursecall",
//   };
//   return (
//     <div className="product-card">
//       {/* apply the .card class */}
//       <h4>{title}</h4>
//       <p>{subtitle}</p>
//       <div className="button-center">
//         {route && <a href={constructRoute(routes[route])}>Read More</a>}
//       </div>
//     </div>
//   );
// };

// export default Card;
