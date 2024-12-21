import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem'; // Make sure to import ExperienceItem
import styles from './Experience.module.css';

const experiences = [
    { id: 1, title: "Data Engineer", date: "Dec 2024 - Present", company: "Capital One", description: `
    • Designed and implemented ETL pipelines to process and transform large datasets, ensuring data accuracy and efficiency.
    • Established and maintained data lineage frameworks to enhance traceability and governance across critical banking datasets.
    • Developed optimized SQL queries to extract insights and support data-driven decision-making for retail banking analytics.
    • Built and maintained Spark-based data processing workflows to handle high-volume transactional data.
    • Leveraged AWS services (e.g., S3, Glue, Redshift, EMR) to create scalable and cost-efficient data storage and processing solutions.
    • Conducted detailed data analysis to identify trends and support business strategies for customer engagement and product offerings.
    • Collaborated with cross-functional teams to implement data governance policies and ensure compliance with financial regulations.
    • Automated and optimized data workflows to improve processing efficiency and reduce operational overhead.
    ` },
    { id: 2, title: "Software Engineer", date: "Jan 2024 - Dec 2024", company: "Frugal Innovation Hub", description: `
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

    { id: 3, title: "Web Developer", date: "Jul 2022 - Dec 2023", company: "Santa Clara University", description: `
    • Created dynamic web pages and improved user experience for more than 200,000 users. Worked in a CMS environment.
    • Optimized data-driven components using JavaScript and SQL, improving website responsiveness by 25% and streamlining dynamic content delivery from backend databases.
    • Analyzed user behavior using Google Analytics, providing actionable insights that increased site traffic by 15% through data-driven enhancements to website functionality.
    • Collaborated in an Agile environment, utilizing Git for version control, and Slack and JIRA for collaboration.
    • Technologies: JavaScript, HTML, CSS, Google Analytics, CMS, GitHub, Jira, Slack` },
    
    { id: 4, title: "Software Engineer", date: "Aug 2019 - Sep 2021", company: "Rajat IT Consultancy", description: `
    • Designed and built single-page applications (SPAs) using React.js and Redux, improving load times and user engagement
    • Implemented RESTful APIs to integrate external services and ensure seamless data communication between the frontend and backend
    • Built and managed ETL processes on AWS (S3, Redshift, Glue, MSK (Kafka), supporting data modeling and analytics to provide clients with actionable insights.
    • Managed source control and implemented CI/CD pipelines using GitHub Actions, improving the development workflow
    • Built and managed ETL processes on AWS (S3, Redshift, Glue, MSK (Kafka), supporting data modeling and analytics to provide clients with actionable insights.
    • Technologies: Python, Django, Java, Spring Boot, React.js, Redux, AWS, Docker, PostgreSQL, MongoDB, GitHub Actions
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