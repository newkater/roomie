import React from "react"
import "./avatar.css"

const Avatar = ({size, image}) => {
    const style = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        width: `${size}px`,
        height: `${size}px`
    }
    return(
        <div style={style} className="avatar">
        </div>
    )
}

export default Avatar