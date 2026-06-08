export default function ContactLink({
    href,
    icon,
    label,
    linkValue,
    isExternal = false
}) {
    return <>
        <a
            className="contact-link"
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
        >
            <span className="contact-link-icon">{icon}</span>
            <div>
                <div className="contact-link-label">{label}</div>
                <div className="contact-link-val">{linkValue}</div>
            </div>
        </a>
    </>
}