import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import SideDrawer from "./components/SideDrawer/SideDrawer" ;
import Backdrop from "./components/Backdrop/Backdrop"
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
function App() {
  const [sideDrawerOpen, setSideDrawer] = useState(false);



  const drawerToggleClickHandler = () => {
   setSideDrawer(state => !state) ;
  } ;

  const backdropClickHandler = () => {
    setSideDrawer(false) ;
  }

 
   let sideDrawer ;
   let backdrop ;
   if(sideDrawerOpen) {
     sideDrawer = <SideDrawer click={backdropClickHandler}/>
     backdrop = <Backdrop click={backdropClickHandler}/>
   }
  
 



  return (
    <div className="App">
      <Header drawerClickHandler={drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <div className="app__itemsContainer">
      <Item
      first
        rightBtnLink=''
        twoButtons='true'  
        title='Model S'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        />
        <Item
        rightBtnLink=''
        twoButtons='true'  
        title='Model 3'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        />
        <Item
        title='Model X'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={ModelX}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'  
        />
        <Item
        title='Model Y'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={ModelY}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'  
        />
        <Item 
        title='SolarRoof'
        desc='Money back guarantee'
        descLinks=''
        backgroundImg={SolarRoof}
        leftBtnTxt='ORDER NOW'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Lowest Cost Solar Panels in India'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        
        />
        <Item
        title='Accessories'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={Accessories}
        leftBtnTxt='SHOP NOW'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        />
        
      </div>
    </div>
  );
}

export default App;
