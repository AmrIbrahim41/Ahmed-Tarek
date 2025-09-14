import React from 'react'
import './SCard.css'

const SCard = ({ Icon, title, List }) => {

    return (
        <div className="service-card">
            {/* Using a div for the icon is better for styling */}
            <div className="card-icon">{Icon}</div>
            <h3>{title}</h3>
            <ul className="card-description">
                {List.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SCard