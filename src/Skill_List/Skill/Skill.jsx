import React from 'react'
import './Skill.css'

const Skill = ({ skillName, skillImage }) => {
  return (
    <div className="skill-item">
      <img src={skillImage} alt={skillName} className="skill-icon" />
      <p className="skill-name">{skillName}</p>
    </div>
  )
}

export default Skill