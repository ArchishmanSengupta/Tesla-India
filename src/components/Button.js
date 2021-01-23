import React from 'react'

const Button =({imp,text,link}) => {
    return (
        <div className={'button $ { imp == 'secondary' ? 'button_white':''}'}>
            <a href=(Link)>
                {text}
            </a>

        </div>
    )
}
export default Button