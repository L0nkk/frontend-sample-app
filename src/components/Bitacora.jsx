import React from 'react';

const Bitacora = ({ date, content }) => {
  return (
    <li className="bitacora-item">
      <strong>{date}</strong>: {content}
    </li>
  );
};

export default Bitacora;
