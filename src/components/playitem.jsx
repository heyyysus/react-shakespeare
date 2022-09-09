import React from 'react';
import { Link } from 'wouter';

/**
 * 
 * @param {*} props: {
 *  play_id: string
 *  
 * }
 */

const PlayItem = (props) => {

    const clickHandler = () => {
        setVisible(prevVisible => !prevVisible); 
        console.log("TOGGLE BITCH");
    };

    const GetPlayById = (id) => {
        let xhttp = new XMLHttpRequest();
        const url = `../texts/${id}_moby.xml`;
        xhttp.open("GET", url, false);
        xhttp.send();
        let parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
        return xmlDoc;
      };

      const [xmlText, setXmlText] = React.useState("");
      const [visible, setVisible] = React.useState(false);

      const getPlayMenu = () => {
        const acts = xmlText.getElementsByTagName("ACT");
        const items = [];

        for(var i = 0; i < acts.length; i++) {
            const scenes_length = acts[i].getElementsByTagName("SCENE").length;
            for(var j = 0; j < scenes_length; j++){
                items.push({ 
                    name: `ACT ${i+1} SCENE ${j+1}`,
                    act: i+1,
                    scene: j+1,
                 });
            }
        }
        return items;
      }

      React.useEffect(() => {
        setXmlText(GetPlayById(props.play_id));
        //setXmlText("TEST TEST TEST");
      }, []);

      return(
      <div>
        { (visible) ? (<div className='expand' onClick={ clickHandler }>Hide</div>) : (<div className="expand" onClick={ clickHandler }>Expand</div>) }
        { (visible) ? getPlayMenu().map(item => { return(
        <Link href={`/play/${props.play_id}/${item.act}/${item.scene}`}>
            <div className="play-menu-item">
                {item.name}
            </div>
        </Link>
        ) }) : "" }
      </div>
      );

}

export default PlayItem;