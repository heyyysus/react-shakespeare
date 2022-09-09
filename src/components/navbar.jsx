import React from 'react';
import { Link } from 'wouter';

/*
  props: {
    path: string
  }
*/

const Navbar = (props) => {
  const numOfElements = 4;
  const items = [
    { name: "Home", path: "/" },
    { name: "Plays", path: "/plays" },
    { name: "Predictor", path: "/predictor" },
    { name: "Settings", path: "/settings" },
  ];
  
  let selected = "";
  
  return (
    <div className="navbar">
      {
        items.map((item, index) => {
          const selected = (props.path === item.path) ? "selected" : "";
          const classes = "navbar-item " +  selected;
          return (
            <Link href={item.path} key={index}>
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