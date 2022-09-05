import React from 'react';

/*
  props: {
    selection: number
  }
*/

const Navbar = (props) => {
  const numOfElements = 4;
  const selection = props.selection % numOfElements;
  const items = ["Home", "Plays", "Predictor", "About"];
  
  return (
    <div className="navbar">
      {
        items.forEach(itemName => {
          return (
            <div className="navbar-item">
              <p>{itemName}</p>
            </div>
          );
        })
      }
    </div>
  );
  
}

export default Navbar;