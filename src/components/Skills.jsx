import styles from './ProjectModal.module.css';

const Skills = () => {

    return (
        <div className="container">
            <h1>Skills</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Backend</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Others</h3>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>SQLite</li>
                        <li>API</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;