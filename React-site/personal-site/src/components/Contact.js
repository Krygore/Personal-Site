import Image from "../images/contact-picture.jpg";

export default function Contact() {
    return (
        <>
            <div className="contact-section">

                <div className="header-image">
                    <img 
                        className="image"
                        src={Image}
                        alt="Michael Wilcox and Daughter"
                        />
                </div>

                <h1>Contact Me</h1>

                <h3>Email: <a href="mailto: webdev.krygore@gmail.com">webdev.krygore@gmail.com</a></h3>
                <h3>Phone: <a href="tel:13602716385">(360)271-6385</a></h3>
                <h3>LinkedIn: <a href="https://www.linkedin.com/in/webdev-michael/">Michael Wilcox</a></h3>
                <h3>GitHub: <a href="https://github.com/WebDev-Michael">WebDev Michael</a></h3>

                <h3>Location: Belfair, WA 98528</h3>
            </div>
        </>
    )
}