import React from 'react';
import Works from '../works.json';
import PlayItem from '../components/playitem';


const Plays = (props) => {

  
  return (
    <div>
      {Works.map((item, index) => {

        return (
          <div key = { index } className="play-selection">
            <h2>{item.title}</h2>
            <PlayItem key={index} play_id={item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Plays;