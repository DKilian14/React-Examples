import linkedin_logo from '../images/linkedin.png'
import email_logo from '../images/email.png'


function NavBar() {
    return (
        <nav className="nav-bar">
          <button className='email-btn'>
            <img  className="linkedin-btn-logo" src={email_logo} alt="LI btn"/>
            Email</button>
          <button className="linkedin-btn">
            <img  className="linkedin-btn-logo" src={linkedin_logo} alt="LI btn"/>
            LinkedIn
          </button>
        </nav>
    )
}

export default NavBar
