import ContactLink from "./ContactLink"

import profile from "../../data/profile";

import { SectionLabel } from "../ui";

const { contact } = profile;

export default function Contact() {
    return <section id="contact">
        <SectionLabel label="06 / contact" />
        <div className="contact-box">
            <div>
                <h2 className="contact-headline">Let's build something <br /><span>great together.</span></h2>
                <p className="contact-sub">I'm open to senior backend, lead engineer, or architect roles. 2-month notice period. Based in Hyderabad — remote & hybrid friendly. I respond within 24 hours.</p>
            </div>
            <div className="contact-links">
                <ContactLink href={`mailto:${contact.email}`} icon="✉" label="Email" linkValue={contact.email} />
                <ContactLink href={`tel:${contact.phone}`} icon="☎" label="Phone" linkValue={contact.phone} />
                <ContactLink href={contact.github} icon='&lt;/&gt;' label="GitHub" linkValue={contact.github} />
                <ContactLink href={contact.linkedIn} icon="in" label="LinkedIn" linkValue={contact.linkedIn} />
            </div>
        </div>
    </section>
}