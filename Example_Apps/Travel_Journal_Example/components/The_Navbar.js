import React from "react"





function NavBar() {
    return (
        <nav className="nav-bar">
          <img className="nav-airbnb-logo" src={require(`../images/Globe.png`)}/>
          <p className="nav-title">My Travel Journal</p>
        </nav>
    )
}

export default NavBar
