export default function ContactLink({href, icon, label, linkValue}) {
    return <>
        <a href={href} className="contact-link">
            <span className="contact-link-icon">{icon}</span>
            <div>
                <div className="contact-link-label">{label}</div>
                <div className="contact-link-val">{linkValue}</div>
            </div>
        </a>
    </>
}