import React from 'react';

const KeyPad = (props) => {

  // func that creates a button element with given value (i) and className
  const renderKeySquare = (i, className) => {
      return (
        <button
          value={ i }
          className={className}
          onClick={ e => props.onClick(e.target.value) } >
          { i }
        </button>
      );
  }

  return (
    <div>
       {renderKeySquare('+', 'operators')}
       {renderKeySquare('-', 'operators')}
       {renderKeySquare('*', 'operators')}
       {renderKeySquare('/', 'operators')}

       <div className="numbers-container">
        {renderKeySquare(7, 'numbers')}
        {renderKeySquare(8, 'numbers')}
        {renderKeySquare(9, 'numbers')}

        {renderKeySquare(4, 'numbers')}
        {renderKeySquare(5, 'numbers')}
        {renderKeySquare(6, 'numbers')}

        {renderKeySquare(1, 'numbers')}
        {renderKeySquare(2, 'numbers')}
        {renderKeySquare(3, 'numbers')}

        {renderKeySquare(0, 'numbers')}
        {renderKeySquare('.', 'numbers')}
        {renderKeySquare('AC', 'numbers')}
      </div>
      {renderKeySquare('=', 'equal-sign')}
    </div>
  );
}

export default KeyPad;
