import React from 'react';
import Certifi_Card from '../../components/Certification_Card/Certifi_Card';
import './Certifications.css'; // ملف CSS خاص بالصفحة
import  img_1  from '../../Media/Pics/Certification_1.png'
import  img_2  from '../../Media/Pics/Certification_2.png'
import  img_3  from '../../Media/Pics/Certification_3.png'
import  img_4  from '../../Media/Pics/Certification_4.png'

const Certifications = () => {
  return (
    <div className="certifications-page">
      <h1 className="page-title">My Certifications</h1>
      <div className="cards-container">
        <Certifi_Card
          title="Microsoft SQL Server"
          status="Gold Certified"
          date="October 2024"
          qualification="Scoring above 80% on Quizzes"
          recall={100}
          img={img_1}
        />
        <Certifi_Card
          title="UI/UX Design and Prototyping with Figma"
          status="Gold Certified"
          date="October 2024"
          qualification="Final Project score of 95%"
          recall={100}
          img={img_2}
        />
        <Certifi_Card
          title="Excel for Data Analysis"
          status="Gold Certified"
          date="April 2024 – June 2024"
          qualification="Scoring above 90% on Quizzes"
          recall={100}
          img={img_3}
        />
        <Certifi_Card
          title="English Language Course"
          status="Gold Certified"
          date="July 2022 – August 2022"
          qualification="Scoring above 95% on Quizzes"
          recall={100}
          img={img_4}
        />
      </div>
    </div>
  );
};

export default Certifications;