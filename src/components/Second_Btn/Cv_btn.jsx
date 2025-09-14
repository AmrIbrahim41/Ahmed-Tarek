import './Cv_btn.css'
import UserCV from '../../Media/CV/User_CV.pdf'

const Cv_btn = () => {
  return (
    <div  className="cta-buttons">
      <a href={UserCV} target="_blank" rel="noopener noreferrer" download="User_CV.pdf"><button className="btn-secondary">Download CV</button></a>
    </div>
  )
}

export default Cv_btn
