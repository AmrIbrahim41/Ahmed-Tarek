import React from 'react';
import './Skill_Circle.css';

const Skill = ({ img, percent, title }) => {
    // We remove the '%' sign to get a pure number for calculations
    const numericPercent = parseInt(percent, 10);

    // This style will create the dynamic circular progress effect
    // It uses a conic-gradient that colors a part of the circle based on the percentage
    const progressStyle = {
        background: `conic-gradient(
            #f27405 ${numericPercent}%, 
            #333333 0
        )`
    };

    return (
        <div className="skill-item">
            <h3>{title}</h3>
            <div className="skill-circle" style={progressStyle}>
                <div className="circle-inner">
                    <img src={img} alt={`${title} logo`} />
                </div>
            </div>
            <p className="percent">{percent}</p>
        </div>
    );
}

export default Skill;