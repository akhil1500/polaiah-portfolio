import { motion } from "framer-motion";

import profile from "../../data/profile";
import { CONTACT_LABELS } from '../../data/constants'

import { SectionLabel, ContactLink } from "../ui";

const { contact } = profile;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};
 
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const contactLinks = [
    {
        id: 1,
        icon: "✉",
        label: CONTACT_LABELS.EMAIL,
        value: contact.email,
        href: `mailto:${contact.email}`,
        external: false
    },
    {
        id: 2,
        icon: "☎",
        label: CONTACT_LABELS.PHONE,
        value: contact.phone,
        href: `tel:${contact.phone}`,
        external: false
    },
    {
        id: 3,
        icon: "</>",
        label: CONTACT_LABELS.GITHUB,
        value: 'github.com/akhil1500',
        href: `${contact.github}`,
        external: true
    },
    {
        id: 4,
        icon: "in",
        label: CONTACT_LABELS.LINKEDIN,
        value: 'polaiah-bodeddula',
        href: `${contact.linkedIn}`,
        external: true
    },
    {
        id: 5,
        icon: "📄",
        label: CONTACT_LABELS.RESUME,
        value: 'Download PDF',
        href: `${contact.resume}`,
        external: true
    }
]

export default function Contact() {
    return (
        <section className="section" id="contact">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.2}}
            >
                <motion.div variants={itemVariants} >
                    <SectionLabel label="06 / Contact" />
                </motion.div>

                <div className="contact-box">
                    
                    {/**---- Left Headline ---- */}
                    <motion.div className="contact-left" variants={itemVariants}>
                        <h2 className="contact-headline">
                            Let's build something <br />
                            <span>great together.</span>
                        </h2>
                        <p className="contact-sub">
                            I'm open to senior backend, lead engineer, or architect roles. 2-month notice period. Based in Hyderabad — remote & hybrid friendly. I respond within 24 hours.
                        </p>
                    </motion.div>

                    {/** ---- Right: Contact Links ---- */}
                    <motion.div className="contact-links" variants={itemVariants}>
                        {contactLinks.map((link) => (
                            <ContactLink
                                key={link.id}
                                icon={link.icon}
                                label={link.label}
                                linkValue={link.value}
                                href={link.href}
                                isExternal={link.external}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}