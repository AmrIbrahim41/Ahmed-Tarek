import './List.css'
import Skill from './Skill/Skill'
import img_1 from '../Media/Pics/Skill_1.png'
import img_2  from '../Media/Pics/Skill_2.png'
import img_3  from '../Media/Pics/Skill_3.png'
import img_4  from '../Media/Pics/Skill_4.png'
import img_5  from '../Media/Pics/Skill_5.png'
import img_6  from '../Media/Pics/Skill_6.png'
import img_7  from '../Media/Pics/Skill_7.png'
import img_8  from '../Media/Pics/Skill_8.png'

const List = () => {
  return (
    <section className="skills-section">
      <div className="skills-badge"> My Skills</div>
      <p className="skills-intro">The skills, tools and technologies I am really good at:</p>

      {/* Container for all skill items */}
      <div className="skills-grid">
        {/* <Skill skillName="Microsoft skills" skillImage={img_1} />
        <Skill skillName="Strong problem-solving" skillImage={img_2} />
        <Skill skillName="Analytical skills" skillImage={img_3} />
        <Skill skillName="Communication Collaboration Leadership" skillImage={img_4} />
        <Skill skillName="Knowing SDLC" skillImage={img_5} />
        <Skill skillName="UI/UX principles" skillImage={img_6} />
        <Skill skillName="Presentation Skills" skillImage={img_7} />
        <Skill skillName="Figma" skillImage={img_8} /> */}
        {/* Add more skills here as needed */}
      </div>
    </section>
  )
}

export default List