import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <button className="nav-link">
                        <Link to="/"  aria-current="page">
                            Home
                        </Link>
                    </button>
                    <button className="nav-link">
                        <Link to="/about" >
                            About
                        </Link>
                    </button>
                    <button className="nav-link">
                        <Link to="/references" >
                            References
                        </Link>
                    </button>
                    <button className="nav-link">
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </button>
                </nav>
                <div className="header">
                <h1 className="header-text">Michael Wilcox: Software Engineer</h1>    
            </div>
            </header>
        </>
    )
}