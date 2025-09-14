import React from 'react'
import './Services.css'
import SCard from './ServiceCard/SCard'

const Services = () => {
    return (
        <div className="services-section" id="services">
            <h2> My Experiences </h2>
            <p>I provide innovative and integrated solutions to help you achieve the success you aspire to.</p>

            {/* Container for the cards grid */}
            <div className="services-grid">
                <SCard
                    Icon="🔍"
                    title="Market & Customer Analysis"
                    List={["Study market trends and competitors.",
                        "Identify customer needs.",
                        "Define target segments.",]}
                />

                <SCard
                    Icon="📈"
                    title="Sales Cycle Management"
                    List={["Prospecting and generating leads.",
                        "Qualifying potential customers.",
                        "Negotiating and closing deals."]}
                />

                <SCard
                    Icon="🤝"
                    title="Client Relationship"
                    List={["Building and maintaining client relationships.",
                        "Understanding client needs and pain points.",
                        "Providing ongoing support and communication."]}
                />
                
                <SCard
                    Icon="🏭"
                    title="Business Processes"
                    List={["Analyze the client’s operations (manufacturing, trading, services…).",
                        "Identify current challenges (inventory issues, financial tracking, HR problems).",
                        "Map business needs to ERP solutions.",]}
                />
                
                <SCard
                    Icon="💡"
                    title="Consultative Selling"
                    List={["Recommend suitable ERP modules (Finance, Inventory, HR, CRM).",
                        "Show how ERP adds efficiency and reduces costs.",]}
                />

                <SCard
                    Icon="🖥️"
                    title="Demos & Presentations"
                    List={["Prepare customized demos for the client’s business case.",
                        "Demonstrate how ERP solves real operational problems.",
                        "Lorem ipsum dolor sit amet."
                    ]}
                />

            </div>
        </div>
    )
}

export default Services