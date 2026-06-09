import { trackEvent } from "../../utils/analytics";

import { CONTACT_LABELS } from '../../data/constants'


export default function ContactLink({
    href,
    icon,
    label,
    linkValue,
    isExternal = false
}) {

    function handleClick() {
        if (label === CONTACT_LABELS.LINKEDIN) {
            trackEvent('linkedin_click', { label: value });
        } else if (label === CONTACT_LABELS.GITHUB) {
            trackEvent('github_click', { label: value });
        } else if (label === CONTACT_LABELS.RESUME) {
            trackEvent('resume_download', { label: value })
        }
    }

    return <>
        <a
            className="contact-link"
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            onClick={handleClick}
        >
            <span className="contact-link-icon">{icon}</span>
            <div>
                <div className="contact-link-label">{label}</div>
                <div className="contact-link-val">{linkValue}</div>
            </div>
        </a>
    </>
}