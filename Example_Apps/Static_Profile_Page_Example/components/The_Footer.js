import linkedin_logo from '../images/linkedin_footer.png'
import facebook_logo from '../images/facebook_footer.png'
import github_logo from '../images/github_footer.png'

function Footer() {
    return (
        <div className="Footer-div">
          <img className="foot_link_icon" src={linkedin_logo}/>
          <img className="foot_face_icon" src={facebook_logo}/>
          <img className="foot_git_icon" src={github_logo}/>

        </div>
    )
}
export default Footer
