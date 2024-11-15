import React from "react";

export const Bitacora = ({ date, content }) => {
  return (
    <li className="bitacora-element">
      <h3>{date}</h3>
      <p>{content}</p>
    </li>
  );
};

export default Bitacora;
