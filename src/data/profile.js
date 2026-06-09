import { getYearsOfExperience, getTotalExperience } from "../utils/experience";

const careerStartDate = "2017-12-22";
const yearsOfExperience = getYearsOfExperience(careerStartDate);
const totalExperince = getTotalExperience(careerStartDate)

const profile = {
  name: "Polaiah Bodeddula",
  shortName: "Polaiah",
  lastName: "Bodeddula",
  role: "Sr. Software Engineer",
  careerStartDate: careerStartDate,
  yearsOfExperience: `${yearsOfExperience}+`,
  avatar: "/src/assets/profile.jpg",
  tagline: "Backend engineer specialising in Node.js, RESTful APIs, and distributed systems.",
  description:
    "I've built platforms serving lakhs of users — from government traffic systems to real-time chat at scale.",
  about: [
    "I'm Polaiah, a Senior Software Engineer from Kadapa, AP — currently working at IT People Corporation India Pvt Ltd in Hyderabad. I build backend systems with Node.js, PostgreSQL, and cloud infrastructure.",
    "Over 7+ years I've shipped production systems across government, edtech, fintech, and SaaS — including Bahrain's national traffic platform, a 4-lakh-student exam system, and a real-time conversational marketing platform.",
    "I've led backend teams, mentored freshers, done code reviews, and taken ownership of full product lifecycles from design to deployment.",
  ],
  stats: [
    { num: yearsOfExperience, suffix: "+", label: "Years Experience" },
    { num: "6", suffix: "+", label: "Companies" },
    { num: "4L", suffix: "+", label: "Students on CNAPS" },
    { num: "24.5", suffix: "L", label: "Current CTC" },
  ],
  info: [
    { key: "Status", value: "Open to work" },
    { key: "Location", value: "Hyderabad, India" },
    { key: "Experience", value: totalExperince },
    { key: "Current Company", value: "IT People Corp" },
    { key: "Notice Period", value: "2 months" },
    { key: "Education", value: "B.Tech CSE · 8.1 CGPA" },
    { key: "Languages", value: "English, Telugu" },
  ],
  contact: {
    email: "akhilchandu108@gmail.com",
    phone: "+91 9502968503",
    github: "https://github.com/akhil1500",
    portfolio: "https://github.com/akhil1500/polaiah-portfolio",
    linkedIn: "https://www.linkedin.com/in/polaiah-bodeddula/",
    resume: "https://polaiah-assets.s3.ap-south-1.amazonaws.com/POLAIAH_BODEDDULA.pdf"
  },
};

export default profile;