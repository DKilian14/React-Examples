import React from "react"

import picture_collage from '../images/photo_collage.png'

function MainCollage() {
    return (
        <div className = 'Main-Collage'>
        <img className='Collage-Image' src={picture_collage}/>
        </div>
    )
}

export default MainCollage
