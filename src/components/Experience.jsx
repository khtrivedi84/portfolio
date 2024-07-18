import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem'; // Make sure to import ExperienceItem
import styles from './Experience.module.css';

const experiences = [
    { id: 1, title: "App Developer", date: "Jan 2024 - Present", company: "Frugal Innovation Hub", description: `
    • Lead a five-person team in Library Management App development for 38 libraries across 3 African countries.
    • Develop user interfaces, framework components, and backend scripts to enable comprehensive and well-styled web applications.
    • Convert Figma prototypes into fully functional, dynamic web pages. Utilized ReactJS, Redux, and NodeJS for development.
    • Conduct user testing to gather feedback and improve user experience.
    • Routinely conduct peer code reviews to guarantee optimal performance and defect-free project development
    • Integrate REST APIs for user authentication, data retrieval, and transaction processing, ensuring secure and efficient communication between the frontend and backend systems.
    • Write complex SQL queries and integrated them into frontend applications to enable dynamic data retrieval and display.
    • Implement version control using Git and established CI/CD pipelines with GitHub Actions to automate and streamline the deployment process.
    • Maintain and debug software using logging to enhance system stability and performance.
    • Collaborate with cross-functional teams, including designers, product managers, and QA engineers, within an Agile framework to ensure cohesive and high-quality application development.  
    ` },

    { id: 2, title: "Web Developer", date: "Jul 2022 - Dec 2023", company: "Santa Clara University", description: `
    • Leveraged JavaScript ES6, HTML, CSS, and Bootstrap to develop responsive and visually consistent components, aligning with brand design guidelines. Integrated with database using SQL queries.
    • Developed and maintained 200+ re-usable components in a CMS environment, with database integration and server‐side scripting
    • Created a custom "Related Articles" component using Vanilla JavaScript(ES6), SQL, PHP, and AJAX, resulting in a 15% increase in user engagement.
    • Ensured accessibility by adhering to WCAG 2.2, W3C, and ARIA standards, using tools such as Axe, Lighthouse, WAVE, NVDA, JAWS, and Voiceover to validate and optimize web content for inclusivity.
    • Utilized front‐end technologies (JavaScript, HTML/CSS) to ensure seamless functionality of the components
    • Employed performance optimization techniques, such as Caching, Lazy Loading, CDN, Asynchronous loading, Minification, resulting in a notable 20% improvement in page load speed, benefiting over 200,000 monthly visitors.
    • Utilized Google Analytics to track user behavior and inform decision‐making processes, demonstrating data‐driven approach to web development.
    • Communicated effectively with third-party vendors and different teams to resolve support tickets and provided support
    • Facilitated efficient cross‐functional collaboration utilizing Slack and Asana task management, ensuring smooth project coordination and timely deliverables` },
    
    { id: 3, title: "Software Engineer", date: "Aug 2019 - Sep 2021", company: "Rajat IT Consultancy", description: `
    • Created robust web applications with Python and Java frameworks, employing the MVC/MVT architecture to ensure modularity.
    • Spearheaded the development of a real‐time notification system using Django Channels for a health and fitness‐based web portal, enabling prompt communication between users and enhancing user engagement.
    • Led a React upgrade from v14 to v16.8 by introducing hooks, restructuring legacy code, and converting class components to functional components for improved state management.
    • Designed and integrated 200+ REST APIs with AWS API Gateway, and developed microservices architecture, enhancing data interoperability, scalability, and fault tolerance.
    • Enhanced system responsiveness by 40% with optimized SQL queries and effective caching strategies.
    • Diagnosed and debugged software problems, employing logging and automated testing to ensure system stability.
    • Engaged in the assessment and resolution of issue tickets for both new and legacy components.
    • Established Git version control to streamline code management, minimizing conflicts and maximizing efficiency.
    ` },
];
const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div id="experience" tabIndex={0} aria-label='experience section' className={`container justify-content-center mt-4 ${styles.experienceContainer}`}>
            <h2 className={`text-center ${styles.experienceHeading} ${styles.sectionh2}`}>Experience</h2>
            <div className={`row justify-content-center`}>
                <div className="col-md-10 col-md-offset-1">
                    <div className={`${styles.experienceContent}`}>
                        <div className={`${styles.cdTimeline}`}>
                            {experiences.map((experience, index) => (
                                <ExperienceItem key={experience.id} experience={experience} index={index} expandedId={expandedId} setExpandedId={setExpandedId} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;