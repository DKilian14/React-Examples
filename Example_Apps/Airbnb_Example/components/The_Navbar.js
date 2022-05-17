import React from "react"


import airbnb_logo from '../images/airbnb_logo.png'


function NavBar() {
    return (
        <nav className="nav-bar">
          <img className="nav-airbnb-logo" src={airbnb_logo}/>
        </nav>
    )
}

export default NavBar
