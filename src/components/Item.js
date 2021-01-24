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
                        <button imp='primary' text={leftBtnTxt} Link={leftBtnLinks}/>
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnTxt} Link={rightBtnLink}/>
                        )}
                    </div>
                    {first && (
                        <div className="item__expand">
                        <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}
export default Item