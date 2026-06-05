import { useEffect, useState } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import profile from "../../data/profile";

const NAV_LINKS = [
    { label: "about",       href: "#about" },
    { label: "skills",      href: "#skills" },
    { label: "experience",  href: "#experience" },
    { label: "projects",    href: "#projects" },
    { label: "contact",     href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map(link => link.href.replace("#", ""))

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection  = useScrollSpy(SECTION_IDS);

    useEffect(() =>{
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[])


    const handleMenuClick = () => setMenuOpen((prev) => !prev);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="nav-inner">
                {/**Logo */}
                <a href="#" className="logo">$ ~/polaiah</a>
                {/** Desktop Links */}
                <ul className="nav-links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.replace("#", "") ? "nav-link--active" : ""}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/**CTA */}
                <a href={`mailto:${profile.contact.email}`} className="nav-cta">
                    hire me
                </a>

                {/**Mobile Hamburger */}
                <button
                    className="nav-hamburger"
                    onClick={handleMenuClick}
                    aria-level="Toggle menu"
                    >
                        <span className={`hamburger-line ${menuOpen ? "hamburger-line--open-1" : ""}`} />
                        <span className={`hamburger-line ${menuOpen ? "hamburger-line--open-2" : ""}`} />
                        <span className={`hamburger-line ${menuOpen ? "hamburger-line--open-3" : ""}`} />                
                </button>
            </div>

            {/** Mobile Menu */}
            {menuOpen && (
                <div className="nav-mobile-menu">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`nav-mobile-link ${activeSection === link.href.replace("#", "") ? "nav-link--active" : ""}`}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
            <a 
                href={`mailto:${profile.contact.email}`}
                className="nav-cta nav-cta--mobile"
                onClick={handleLinkClick}
            >
                hire me
            </a>
        </nav>
    )
}