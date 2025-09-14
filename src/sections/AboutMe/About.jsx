import './About.css';

// Make sure the image paths are correct
import userImage from '../../Media/Pics/userImage.png'; // <--- غيّر اسم صورتك هنا
import List from '../../Skill_List/List';
import Cv_btn from '../../components/Second_Btn/Cv_btn';
import Skill_Circle from '../../components/SkillsCicle/Skill_Circle';
import about_1 from '../../Media/Pics/about_1.png';
import about_2 from '../../Media/Pics/about_2.png';
import about_3 from '../../Media/Pics/about_3.png';
import about_4 from '../../Media/Pics/about_4.png';
const About = () => {
    return (
        <>
            {/* About Me Section */}
            <section className="about-section" id="about">
                {/* Image Container */}
                <div className="about-image">
                    <div className="about-image-background-circle">
                        <img src={userImage} alt="Ahmed Tarek S" />
                    </div>
                </div>

                {/* Content Container */}
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                        Sales manager at OIT Solutions, a company that offers Odoo ERP solutions for
                         various industries such as construction, Real state, Retail, Rental, HR, Medical,
                          Manufacturing in North Africa region such as Egypt, Kenya, Algeria, Turkey, KSA, 
                          Emirates. We provide service of Odoo modules training, implementation, customization,
                           migration, and development.
                    </p>

                    <Cv_btn />
                </div>
            </section>

            {/* My Skills Section */}
            <section className="skills-section">

                {/* <h2>My Skills</h2>
                <p>Here are some of my skills where I've earned knowledge into expertise.</p> */}


                {/* Skill Circle Component */}
                <div className="skills-container">
                    <Skill_Circle
                        title="Facebook ADS"
                        img={about_1}
                        percent="80%"
                    />
                    <Skill_Circle
                        title="Google ADS"
                        img={about_2}
                        percent="90%"
                    />
                    <Skill_Circle
                        title="LinkedIn ADS"
                        img={about_3}
                        percent="95%"
                    />
                    <Skill_Circle
                        title="Odoo"
                        img={about_4}
                        percent="100%"
                    />
                </div>


                {/* Skills List Component */}
                {/* <List /> */}
            </section>
        </>
    );
}

export default About;