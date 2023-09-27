import Image from "../images/Profile_picture.JPG";

export default function Home() {

    return (
        <div>
         
            <div className="home-container">
                <div className="header-image">
                    <img
                        className="image" 
                        src={Image}
                        alt="Michael Wilcox Profile Picture"
                    />
                </div>
                <div className="cta-text">  

                      {/* Tech Skills Section */}
                    <div className="tech-skills-container">
                        <h1>Technical Skills</h1>

                        <h3>Front End:</h3>
                        <p>HTML Structure, CSS Styling, Asynchronous JavaScript, React.js Library, Bootstrap, Responsive Web Design</p>

                        <h3>Back End:</h3>
                        <p>Authentication, Data Structures, End-To-End Testing, Express.js, Node.js, Relational Databases, SQL, RESTful State Management</p>

                        <h3>Other:</h3>
                        <p>Algorithms, Big-O Notation, Debugging, Deployment, Single Page Applications, Teamwork and Collaboration, Time Management Techniques</p>
                    </div>

                    {/* Projects Section */}

                    <div className="projects-container">
                        <h1>Projects</h1>

                        <div className="project-card">
                            <button className="project-button">
                                <a href="https://redneck-feeds-llc.vercel.app/">RedNeck Feeds LLC</a>
                            </button>

                            <h3>Senior Developer</h3>

                            <p>Developed a React application through Create React App to build a product landing page for a grain delivery service</p>
                            <p>Utilized react router to create links to the separate categories of feed for easy user navigation</p>
                        </div>
                        
                        <div className="project-card">
                            <button className="project-button">
                                <a href="https://github.com/WebDev-Michael/asylum-rg-fe-starter">Asylum Report Generator</a>
                            </button>

                            <h3>Senior Developer</h3>

                            <p>Created a React App that provides access to customized asylum data features built using JavaScript, HTML and CSS</p>
                            <p>Configured Axios calls to access the Human Rights First API in order to populate the selected data graph visualizations</p>
                            <p>Integrated AuthO to provide login credentials required to view or download a JSON format text file of the data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}