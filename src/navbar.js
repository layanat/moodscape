import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';
import logo from './assets/moodscapelogo.png';

/**
 * NavBar component that provides navigation links across the application.
 * It changes style based on the scroll position to enhance user experience.
 */
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');      // State to manage the active navigation link

    const [scrolled, setScrolled] = useState(false);     // State to handle the navbar style on scroll

    // Effect to add and remove the window scroll event listener
    useEffect(() => {
        const onScroll = () => {
                        // Sets the 'scrolled' state based on scroll position
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
                // Add scroll event listener when the component mounts
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);          // Clean up the event listener when the component unmounts

    }, []);
/**
     * Updates the active navigation link state based on user interaction.
     * @param {string} value - The value of the navigation link that was clicked.
     */
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container fluid>
            <Navbar.Brand href="/" className="me-auto">
                <img src={logo} alt="Moodscape Logo" style={{ width: '60px', height: '100%' }} />
                 <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '24px', color: '#343865' }}>MoodScape</span>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            href="/checkin" 
                            className={`navbar-link ${activeLink === 'checkin' ? 'active' : ''}`} 
                            onClick={() => onUpdateActiveLink('checkin')}>
                            Check-In
                        </Nav.Link>

                        <Nav.Link 
                            href="/stats" 
                            className={`navbar-link ${activeLink === 'stats' ? 'active' : ''}`} 
                            onClick={() => onUpdateActiveLink('stats')}>
                            Your Stats
                        </Nav.Link>


                        <Nav.Link 
                            href="/recap" 
                            className={`navbar-link ${activeLink === 'recap' ? 'active' : ''}`} 
                            onClick={() => onUpdateActiveLink('recap')}>
                            Recap Your Moodscape Journey
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
