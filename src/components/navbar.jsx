import React from 'react';
import { Link } from 'wouter';

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
        items.map(itemName => {
          return (
            <Link href=``>
              <div className="navbar-item">
                <p>{itemName}</p>
              </div>
            </Link>
           
          );
        })
      }
    </div>
  );
  
}

export default Navbar;