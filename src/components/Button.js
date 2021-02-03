import React from 'react'
import './Button.css';

const Button =({imp,text,link}) => {
    return (
        <div className={`button ${imp =='button__black' ? 'button__white' : ''}`}>
            <a className="button__text" href={link}>
                {text}
            </a>

        </div>
    )
}
export default Button
