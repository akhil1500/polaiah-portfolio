import profile from "../../data/profile";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-note">
                    © {currentYear} . {profile.name} . {profile.role}
                </span>
                <span className="footer-note">
                    Hyderabad, India . {" "}
                    <a
                        href={profile.contact.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        akhil1500/polaiah-portfolio
                    </a>
                </span>
            </div>
        </footer>
    )
}