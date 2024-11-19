import Image from "../images/Profile_picture.JPG";

export default function Home() {

    return (
        <div>
         
            <div className="home-container">
                <div className="header-image">
                    <img
                        className="image" 
                        src={Image}
                        alt="Michael Wilcox"
                    />
                </div>
                <div className="cta-text">  

                      {/* Tech Skills Section */}
                    <div className="tech-skills-container">
                        <h1>Technical Skills</h1>

                        <h3>Front End:</h3>
                        <p>HTML Structure, CSS Styling, Tailwind CSS, Asynchronous JavaScript, React.js Library, Bootstrap, Responsive Web Design</p>

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
                                <a href="https://redneckfeeds.com/">RedNeck Feeds LLC</a>
                            </button>

                            <h3>Senior Developer</h3>

                            <p>Developed a React application through Create React App to build a product landing page for a grain delivery service</p>
                            <p>Utilized react router to create links to the separate categories of feed for easy user navigation</p>
                            <p>Utilized react components to generate multiple cards based on dynamic calling of data to render feed cards</p>
                        </div>
                        
                        <div className="project-card">
                            <button className="project-button">
                                <a href="https://natures-blessing-photography.vercel.app">Nature's Blessing Photography</a>
                            </button>

                            <h3>UI/UX Developer</h3>

                            <p>Communicated and implemented effective responsive web design tactics resulting in functional site responsiveness
                                on mobile devices, tablets and computers</p>
                            <p>Adapted to evolving project requirements and client feedback to continuously improve site responsiveness</p>
                            <p>Employed CSS flexbox to create efficient and adaptable page structures</p>
                        </div>

                        <div className="project-card">
                            <button className="project-button">
                                <a href="">Shop Online New York</a>
                            </button>

                            <h3>Fullstack Development Manager</h3>

                            <p>Created a fully functioning and articulate E-commerce site for New York businesses and buyers</p>
                            <p>Adapted to evolving project requirements and client feedback to continuously improve site responsiveness</p>
                            <p>Employed Tailwind CSS to create efficient and adaptable page structures</p>
                            <p>Implemented an Express.js server and SQL database to allow for users to create an account, both buyers and sellers</p>
                            <p>Led three teams during the development process, consisting of the React team, the CSS team and the Backend Development team</p>
                            <p>Reviewed the code of each team and pushed to the main branch after any change requests have been met</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}