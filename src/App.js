import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
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
        first
        />
        <Item
        title='Model S'
        desc='Rs.55 Lakhs'
        descLinks=''
        backgroundImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item
        title='Model 3'
        desc='Money-back guarantee'
        descLinks=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLinks=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'  
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
