import React from 'react';

/**
 * 
 * @param {*} props: {
 *  fancyTogggled: bool
 *  toggleFont: void => void
 * }
 * @returns 
 */

const Settings = (props) => {

    return (
        <div>
            Fancy Font <button onClick={ props.toggleFont }>{ (props.fancyToggled) ? "On" : "Off" }</button>
        </div>
    );
};

export default Settings;
