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
  
  return (
    <div className="navbar">
      {
        items.map((item, index) => {
          return (
            <Link href={item.path} key={selection}>
              <div className={[...["navbar-item"], ...((selection === index) ? ["selected"] : [])]}>
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