import React from 'react';

/**
 * 
 * @param {*} props: {
 *  play_id: string
 *  act: number
 *  sceen: number
 * }
 */

const Play = (props) => {

    const style = (props.font) ? { "font-family": "Brush Script MT" } : {}

    const GetPlayById = (id) => {
        let xhttp = new XMLHttpRequest();
        const url = `/texts/${id}_moby.xml`;
        xhttp.open("GET", url, false);
        xhttp.send();
        let parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
        return xmlDoc;
      };

    const mapper = (scene) => {
        const items = [];
        for(var i = 0; i < scene.childElementCount; i++){
            const element = scene.children[i];
            if(element.tagName === "TITLE")
                items.push(<h3 className='play-title'>{element.textContent}</h3>);
            else if(element.tagName === "STAGEDIR")
                items.push(<p className='play-stagedir'>{element.textContent}</p>);
            else if(element.tagName === "SPEECH") {
                items.push(<br />);
                for(var j = 0; j < element.childElementCount; j++){
                    items.push(<p className='play-line'>{element.children[j].textContent}</p>);
                }
            }
        }
        return items;
    };
    
    const SCENE = GetPlayById(props.play_id).getElementsByTagName("ACT")[props.act-1].getElementsByTagName("SCENE")[props.scene-1];
    return (
    <div className='play-wrapper' style = { style }>
        {mapper(SCENE)}
    </div>
    );
};

export default Play;