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
        desc='Rs.50,67,618.35'
        descLinks=''
        backgroundImg={ModelS}
        leftBtnTxt='ORDER NOW'
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
        leftBtnTxt='ORDER NOW'
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
        leftBtnTxt='ORDER NOW'
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
        twoButtons='true' 
        />
      </div>
    </div>
  );
}

export default App;
