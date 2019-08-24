import React from 'react';

const Display = (props) => {
  return (
     <div className="display">
       <span className="display-text">{props.display}</span>
     </div>
  );
}

export default Display;
