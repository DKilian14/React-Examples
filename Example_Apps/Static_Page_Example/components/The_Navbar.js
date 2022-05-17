import duck from '../images/duck.png'


function NavBar() {
    return (
        <nav className="nav-bar">
          <img className="nav-logo" src={duck} alt='image here'/>
          <h1 className="nav-title" >React Facts</h1>
          <p className="nav-statement" size="10000px">React Course - Project 1</p>
        </nav>
    )
}

export default NavBar
