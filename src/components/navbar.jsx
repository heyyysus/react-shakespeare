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
  const items = [
    { name: "Home", path: "/" },
    { name: "Plays", path: "/plays" },
    { name: "Predictor", path: "/predictor" },
    { name: "About", path: "/about" },
  ];
  
  let selected = "";
  
  return (
    <div className="navbar">
      {
        items.map((item, index) => {
          const selected = (selection === index) ? "selected" : "";
          const classes = "navbar-item " +  selected;
          return (
            <Link href={item.path} key={selection}>
              <div className={classes}>
                <p>{item.name}</p>
              </div>
            </Link>
           
          );
        })
      }
    </div>
  );
  
}

export default Navbar;