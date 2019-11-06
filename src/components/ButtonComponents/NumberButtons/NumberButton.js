import React from "react";

const NumberButton = props => {
  return (
    // <div className='numbersDiv'>
    <button className='number_buttons'>{props.button}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
    // </div>
  );
};

export default NumberButton;