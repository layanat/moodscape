import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';
import logo from './assets/moodscapelogo.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container fluid>
            <Navbar.Brand href="/" className="me-auto">
                <img src={logo} alt="Moodscape Logo" style={{ width: '60px', height: '100%' }} />
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
