import prof_pic from '../images/Profile_Picture.png'


function Header() {
    return (
        <div className="Header-div">
          <img className="Header-logo" src={prof_pic} alt='image here'/>
          <h1 className="Profile-name">Daniel Kilian</h1>
          <p className="Profile-title">Full Stack Developer</p>
          <p className="Profile-email">DanKilian@Yahoo.com</p>
        </div>
    )
}
export default Header
  
