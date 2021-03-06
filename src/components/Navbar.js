import React, {useEffect, useState} from 'react'
import logo from '../assets/images/logo.svg'
import image from '../assets/images/photo.jpg'
import cv from '../assets/cv/CV(eng)-Sherkhan.pdf'
import {Link} from "react-router-dom";



export const Navbar = () => {
    const [sidebar, setSidebar] = useState("showSidebar")
    const [offset, setOffset] = useState(0);

    const handleToggle = () => {
        setSidebar({
            showSidebar: !sidebar.showSidebar
        })
    }

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav className={offset ? "navbar-fixed" : "nav"} id="nav">
                <div className="nav-center">

                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="nav logo" />
                        <button className="nav-btn"
                                id="nav-btn" onClick={handleToggle}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to={'/portfolio-2'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>about</Link>
                        </li>
                        <li>
                            <Link to={'/projects'}>projects</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <aside className={sidebar.showSidebar ? "sidebar show-sidebar" : "sidebar"} id="sidebar">
                <div>
                    <button className="close-btn"
                            id="close-btn" onClick={handleToggle}>
                        <i className="fas fa-times"></i>
                    </button>

                    <ul className="sidebar-links">
                        <li>
                            <Link to={'/portfolio-2'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>about</Link>
                        </li>
                        <li>
                            <Link to={'/projects'}>projects</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>contact</Link>
                        </li>
                    </ul>

                    <ul className="social-icons">
                        <li>
                            <a href="https://github.com/sherkhan61"
                               className="social-icon"
                               target="_blank" rel="noopener">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sherkhan-tulkibay/"
                               className="social-icon"
                               target="_blank" rel="noopener">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}