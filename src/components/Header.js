import React  from 'react' ;
import './Header.css' ;
import DrawerToggleBtn from "./SideDrawer/DrawerToggleBtn.js"

import TeslaLogo from'../assets/teslaLogoSmall.svg' ;


const Header =({drawerClickHandler}) =>{
  


    return (
        <div className='header'>
            <div className="header__logo">
                <img src={TeslaLogo} alt='Tesla Logo'/>
            </div>

            <div className="header__center" >
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
                

                
            </div>
            <div className="sidebar">
                 <DrawerToggleBtn click={drawerClickHandler}/>
            </div>
        </div>
    )
}

export default Header 