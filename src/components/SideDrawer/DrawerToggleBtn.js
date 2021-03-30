import React from 'react' ;
import "../Header.css" ;

function DrawerToggleBtn({click}) {
    return (
        <div onClick={click}>
            <div className="sidebar__line"></div>
            <div className="sidebar__line"></div>
            <div className="sidebar__line"></div>
        </div>
    )
}

export default DrawerToggleBtn
