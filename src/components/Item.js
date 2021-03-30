import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css'

const Item =({title,desc,backgroundImg,leftBtnTxt,leftBtnLinks,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
    return(
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})` //The background Img is not getting embedded
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                    <Button className="button" imp="button__black" text={leftBtnTxt}/>
                    <Button imp="button__white" text={rightBtnTxt} />
                        
                    </div>
                    {first && (
                        <div className="item__expand">
                        <ExpandMoreIcon className="expand__btn" 
                         />
                     </div>
                    )}
                    </div>
            
            </div>
        </div>
    )
}
export default Item